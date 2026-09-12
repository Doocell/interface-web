const express = require('express');
const router = express.Router();

const pool = require('../config/database');
const requireAdmin = require('../middleware/adminAuth');
const { adminRateLimit } = require('../middleware/rateLimit');

router.get('/', async (req, res) => {
  try {
    const requestedLimit = Number(req.query.limit);
    const limit = Math.min(
      Number.isInteger(requestedLimit) && requestedLimit > 0
        ? requestedLimit
        : 100,
      100
    );

    const groups = await pool.query(
      `
      SELECT
        id,
        name AS nama_kelompok,
        poin
      FROM kelompok
      ORDER BY poin DESC, id ASC
      LIMIT ?
      `,
      [limit]
    );

    return res.json({
      success: true,
      groups,
    });
  } catch (error) {
    console.error('Fetch leaderboard error:', error);

    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
    });
  }
});

router.get('/admin/teams', requireAdmin, async (req, res) => {
  try {
    const teams = await pool.query(
      `
      SELECT
        k.id,
        k.grup_id,
        g.name AS grup_name,
        k.name,
        k.poin
      FROM kelompok k
      JOIN grup g ON g.id = k.grup_id
      ORDER BY k.id ASC
      `
    );

    return res.json({
      success: true,
      teams: teams.map((team) => ({
        ...team,
        id: Number(team.id),
        grup_id: Number(team.grup_id),
        poin: Number(team.poin),
      })),
    });
  } catch (error) {
    console.error('Fetch admin leaderboard teams error:', error);

    return res.status(500).json({
      success: false,
      message: 'Gagal mengambil data tim.',
    });
  }
});

router.patch('/admin/teams/:id', requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const hasName = Object.prototype.hasOwnProperty.call(req.body, 'name');
    const hasPoin = Object.prototype.hasOwnProperty.call(req.body, 'poin');

    if (!hasName && !hasPoin) {
      return res.status(400).json({
        success: false,
        message: 'Nama tim atau poin wajib diisi.',
      });
    }

    const updates = [];
    const values = [];

    if (hasName) {
      if (typeof req.body.name !== 'string' || !req.body.name.trim()) {
        return res.status(400).json({
          success: false,
          message: 'Nama tim wajib berupa teks dan tidak boleh kosong.',
        });
      }

      updates.push('name = ?');
      values.push(req.body.name.trim());
    }

    if (hasPoin) {
      const parsedPoin = Number(req.body.poin);

      if (!Number.isInteger(parsedPoin) || parsedPoin < 0) {
        return res.status(400).json({
          success: false,
          message: 'Poin wajib berupa bilangan bulat positif atau nol.',
        });
      }

      updates.push('poin = ?');
      values.push(parsedPoin);
    }

    values.push(id);
    const result = await pool.query(
      `UPDATE kelompok SET ${updates.join(', ')} WHERE id = ?`,
      values
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Kelompok tidak ditemukan.',
      });
    }

    return res.json({
      success: true,
      message: 'Data tim berhasil diperbarui.',
    });
  } catch (error) {
    console.error('Update admin leaderboard team error:', error);

    return res.status(500).json({
      success: false,
      message: 'Gagal memperbarui data tim.',
    });
  }
});

router.patch('/kelompok/:id/score', adminRateLimit, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { poin } = req.body;
    const parsedPoin = Number(poin);

    if (!Number.isFinite(parsedPoin)) {
      return res.status(400).json({
        success: false,
        message: 'Poin wajib berupa angka.',
      });
    }

    const result = await pool.query(
      `
      UPDATE kelompok
      SET poin = ?
      WHERE id = ?
      `,
      [parsedPoin, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Kelompok tidak ditemukan.',
      });
    }

    return res.json({
      success: true,
      message: 'Poin leaderboard berhasil diperbarui.',
    });
  } catch (error) {
    console.error('Update leaderboard score error:', error);

    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
    });
  }
});

module.exports = router;
