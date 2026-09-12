const express = require('express');
const cors = require('cors');

const votingRoutes = require('./routes/voting');
const faqRoutes = require('./routes/faq');
const leaderboardRoutes = require('./routes/leaderboard');
const {
  apiRateLimit,
  adminRateLimit,
  votingRateLimit,
} = require('./middleware/rateLimit');

const app = express();
app.set('trust proxy', 1);
const allowedOrigins = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Origin is not allowed by CORS'));
  },
}));
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});
app.use(express.json({ limit: '100kb' }));
app.use('/api', apiRateLimit);

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
app.use('/api/voting/verify-code', votingRateLimit);
app.use('/api/voting/submit', votingRateLimit);
app.use('/api/voting', votingRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/leaderboard/admin', adminRateLimit);
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

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  console.error('Unhandled request error:', error);
  return res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan pada server.',
  });
});

module.exports = app;
