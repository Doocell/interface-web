const express = require('express');
const cors = require('cors');

const votingRoutes = require('./routes/voting');
const faqRoutes = require('./routes/faq');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/Health', (req, res) => {
  res.json({
      success: true,
      message: 'Lancar bos',
    })
});

app.use('/api/voting', votingRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

module.exports = app;
