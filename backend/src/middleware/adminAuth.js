const crypto = require('crypto');

function requireAdmin(req, res, next) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  const suppliedPassword = req.get('x-admin-password');

  if (!configuredPassword) {
    return res.status(503).json({
      success: false,
      message: 'Admin authentication belum dikonfigurasi.',
    });
  }

  const configured = Buffer.from(configuredPassword);
  const supplied = Buffer.from(suppliedPassword || '');
  const valid =
    configured.length === supplied.length &&
    crypto.timingSafeEqual(configured, supplied);

  if (!valid) {
    return res.status(401).json({
      success: false,
      message: 'Password admin tidak valid.',
    });
  }

  return next();
}

module.exports = requireAdmin;
