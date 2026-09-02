const express = require('express');
const crypto = require("crypto");
const router = express.Router();


const pool = require('../config/database');

 //  Cek yunique  code
router.post("/verify-code", async (req, res) => {
  try {
    const { unique_code } = req.body;

    if (!unique_code) {
      return res.status(400).json({
        success: false,
        message: "Kode kelompok wajib diisi.",
      });
    }

    // cari unique code kelompok
    const rows = await pool.query(
      `
      SELECT
        k.id,
        k.name,
        k.grup_id,
        k.max_uses,
        k.used_count,
        g.name AS grup_name
      FROM kelompok k
      JOIN grup g ON k.grup_id = g.id
      WHERE k.unique_code = ?
      LIMIT 1
      `,
      [unique_code]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Kode kelompok tidak valid.",
      });
    }

    const kelompok = rows[0];

    // Cek limit kode
    if (kelompok.used_count >= kelompok.max_uses) {
      return res.status(403).json({
        success: false,
        message: "Kode Unique sudah tidak dapat digunakan.",
      });
    }
    // Generate token buat sesi vote
    const token = crypto.randomBytes(32).toString("hex");

    await pool.query(
      `
      INSERT INTO voting_sessions
        (token, kelompok_id)
      VALUES (?, ?)
      `,
      [token, kelompok.id]
    );

    // cari tim lain buat vote
    const candidates = await pool.query(
      `
      SELECT
        id,
        name
      FROM kelompok
      WHERE grup_id = ?
        AND id != ?
      ORDER BY id
      `,
      [kelompok.grup_id, kelompok.id]
    );

    return res.json({
      success: true,
      message: "KODE BENAR",

      token,

      kelompok: {
        id: kelompok.id,
        name: kelompok.name,
        grup_id: kelompok.grup_id,
        grup_name: kelompok.grup_name,
      },

      candidates: candidates.map((candidate) => ({
        id: candidate.id,
        name: candidate.name,
      })),
    });

  } catch (error) {
    console.error("Verify code error:", error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });
  }
});

router.post("/submit", async (req, res) => {
  const connection = await pool.getConnection();

  try {
    const { token, voted_kelompok_id } = req.body;

    // Validasi req
    if (!token || !voted_kelompok_id) {
      return res.status(400).json({
        success: false,
        message: "Token dan pilihan vote wajib diisi.",
      });
    }

    await connection.beginTransaction();

    const sessions = await connection.query(
      `
      SELECT
        id,
        kelompok_id,
        has_voted
      FROM voting_sessions
      WHERE token = ?
      LIMIT 1
      FOR UPDATE
      `,
      [token]
    );

    if (sessions.length === 0) {
      await connection.rollback();

      return res.status(401).json({
        success: false,
        message: "Voting session tidak valid.",
      });
    }

    const session = sessions[0];

    // Prevent voting twice with the same session
    if (session.has_voted) {
      await connection.rollback();

      return res.status(403).json({
        success: false,
        message: "Nakal Banget Ih.... Dibilanginnya Cuman Boleh Ngevote Sekali Juga 😤😤😤",
      });
    }

    // Get the voters team
    const voterRows = await connection.query(
      `
      SELECT
        id,
        grup_id,
        used_count,
        max_uses
      FROM kelompok
      WHERE id = ?
      LIMIT 1
      FOR UPDATE
      `,
      [session.kelompok_id]
    );

    if (voterRows.length === 0) {
      await connection.rollback();

      return res.status(404).json({
        success: false,
        message: "Kelompok voter tidak ditemukan.",
      });
    }

    const voter = voterRows[0];

    // Check that the code still has available usage
    if (voter.used_count >= voter.max_uses) {
      await connection.rollback();

      return res.status(403).json({
        success: false,
        message: "Kode kelompok sudah mencapai batas penggunaan.",
      });
    }

    // Find the selected team
    const candidateRows = await connection.query(
      `
      SELECT
        id,
        name,
        grup_id
      FROM kelompok
      WHERE id = ?
      LIMIT 1
      `,
      [voted_kelompok_id]
    );

    if (candidateRows.length === 0) {
      await connection.rollback();

      return res.status(404).json({
        success: false,
        message: "Kelompok yang dipilih tidak ditemukan.",
      });
    }

    const candidate = candidateRows[0];

    // Prevent voting for your own team
    if (candidate.id === voter.id) {
      await connection.rollback();

      return res.status(400).json({
        success: false,
        message: "Kamu tidak dapat memilih kelompok sendiri.",
      });
    }

    // Make sure candidate is in the same group
    if (candidate.grup_id !== voter.grup_id) {
      await connection.rollback();

      return res.status(400).json({
        success: false,
        message: "Kamu hanya dapat memilih kelompok dalam grup yang sama.",
      });
    }

    // Record the vote
    await connection.query(
      `
      INSERT INTO vote_record
        (voter_kelompok_id, voted_kelompok_id)
      VALUES (?, ?)
      `,
      [voter.id, candidate.id]
    );

    // Increase code usage
    await connection.query(
      `
      UPDATE kelompok
      SET used_count = used_count + 1
      WHERE id = ?
      `,
      [voter.id]
    );

    // Lock the voting session
    await connection.query(
      `
      UPDATE voting_sessions
      SET has_voted = TRUE
      WHERE id = ?
      `,
      [session.id]
    );

    // Everything succeeded
    await connection.commit();

    return res.json({
      success: true,
      message: "Vote berhasil disimpan.",
    });

  } catch (error) {
    await connection.rollback();

    console.error("Submit vote error:", error);

    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server.",
    });

  } finally {
    connection.release();
  }
});

module.exports = router;
