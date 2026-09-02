const pool = require('./database');

async function columnExists(tableName, columnName) {
  const rows = await pool.query(
    `
    SELECT COUNT(*) AS count
    FROM information_schema.COLUMNS
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = ?
      AND COLUMN_NAME = ?
    `,
    [tableName, columnName]
  );

  return Number(rows[0].count) > 0;
}

async function initDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS questions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nama VARCHAR(100) NOT NULL,
      kode_kelompok VARCHAR(100) NULL,
      pertanyaan TEXT NOT NULL,
      jawaban TEXT NULL,
      status ENUM('pending', 'answered') NOT NULL DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);

  if (!(await columnExists('kelompok', 'poin'))) {
    await pool.query(`
      ALTER TABLE kelompok
      ADD COLUMN poin INT NOT NULL DEFAULT 0 AFTER used_count
    `);
  }
}

module.exports = initDatabase;
