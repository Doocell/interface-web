const mariadb = require('mariadb');

const requiredEnvironment = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
const missingEnvironment = requiredEnvironment.filter((name) => !process.env[name]);

if (missingEnvironment.length > 0) {
  throw new Error(
    `Missing required database environment variables: ${missingEnvironment.join(', ')}`
  );
}

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

module.exports = pool;
