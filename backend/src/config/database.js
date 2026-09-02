const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rama54321',
  database: process.env.DB_NAME || 'Interpes',
  connectionLimit: 5,
});

module.exports = pool;
