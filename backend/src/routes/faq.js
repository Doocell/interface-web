const express = require('express');
const router = express.Router();

const pool = require('../config/database');

router.get('/', async (req, res) => {
  try {
    const questions = await pool.query(
      `
      SELECT
        id,
        nama,
        kode_kelompok,
        pertanyaan,
        jawaban,
        status,
        created_at,
        updated_at
      FROM questions
      WHERE status = 'answered'
      ORDER BY created_at DESC
      `
    );

    return res.json({
      success: true,
      questions,
    });
  } catch (error) {
    console.error('Fetch FAQ error:', error);

    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { nama, kode_kelompok, pertanyaan } = req.body;

    if (!nama || !pertanyaan) {
      return res.status(400).json({
        success: false,
        message: 'Nama dan pertanyaan wajib diisi.',
      });
    }

    const result = await pool.query(
      `
      INSERT INTO questions
        (nama, kode_kelompok, pertanyaan, status)
      VALUES (?, ?, ?, 'pending')
      `,
      [nama.trim(), kode_kelompok?.trim() || null, pertanyaan.trim()]
    );

    return res.status(201).json({
      success: true,
      message: 'Pertanyaan berhasil dikirim.',
      question: {
        id: Number(result.insertId),
        nama: nama.trim(),
        kode_kelompok: kode_kelompok?.trim() || null,
        pertanyaan: pertanyaan.trim(),
        status: 'pending',
      },
    });
  } catch (error) {
    console.error('Submit question error:', error);

    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
    });
  }
});

router.get('/admin', async (req, res) => {
  try {
    const questions = await pool.query(
      `
      SELECT
        id,
        nama,
        kode_kelompok,
        pertanyaan,
        jawaban,
        status,
        created_at,
        updated_at
      FROM questions
      ORDER BY created_at DESC
      `
    );

    return res.json({
      success: true,
      questions,
    });
  } catch (error) {
    console.error('Fetch admin FAQ error:', error);

    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
    });
  }
});

router.patch('/admin/:id/answer', async (req, res) => {
  try {
    const { id } = req.params;
    const { jawaban } = req.body;

    if (!jawaban) {
      return res.status(400).json({
        success: false,
        message: 'Jawaban wajib diisi.',
      });
    }

    const result = await pool.query(
      `
      UPDATE questions
      SET jawaban = ?, status = 'answered'
      WHERE id = ?
      `,
      [jawaban.trim(), id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Pertanyaan tidak ditemukan.',
      });
    }

    return res.json({
      success: true,
      message: 'Jawaban berhasil disimpan.',
    });
  } catch (error) {
    console.error('Answer FAQ error:', error);

    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
    });
  }
});

module.exports = router;
