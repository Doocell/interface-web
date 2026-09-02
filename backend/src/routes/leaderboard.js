const express = require('express');
const router = express.Router();

const pool = require('../config/database');

router.get('/', async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 30, 100);

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

router.patch('/kelompok/:id/score', async (req, res) => {
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
