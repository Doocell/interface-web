const express = require('express');
const cors = require('cors');

const votingRoutes = require('./routes/voting');
const faqRoutes = require('./routes/faq');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint (case insensitive)
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Backend running successfully!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/Health', (req, res) => {
  res.json({
    success: true,
    message: 'Lancar bos',
  });
});

// Routes
app.use('/api/voting', votingRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Alias for kelompok (untuk consistency)
app.get('/api/kelompok', async (req, res) => {
  try {
    const pool = require('./config/database');
    const kelompok = await pool.query('SELECT * FROM kelompok ORDER BY id ASC');
    
    return res.json({
      success: true,
      data: kelompok
    });
  } catch (error) {
    console.error('Get kelompok error:', error);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.'
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint tidak ditemukan',
    path: req.path
  });
});

module.exports = app;
