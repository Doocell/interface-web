-- Setup database Interface 2026
-- File ini bisa langsung di-import tanpa select database

-- Create database jika belum ada
CREATE DATABASE IF NOT EXISTS interpes;

-- Gunakan database Interpes
USE interpes;

-- Drop tables jika sudah ada (untuk reset)
DROP TABLE IF EXISTS vote_record;
DROP TABLE IF EXISTS voting_sessions;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS kelompok;
DROP TABLE IF EXISTS grup;

-- Create tables
CREATE TABLE grup (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE kelompok (
  id INT AUTO_INCREMENT PRIMARY KEY,
  grup_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  unique_code VARCHAR(100) NOT NULL UNIQUE,
  max_uses INT NOT NULL,
  used_count INT NOT NULL DEFAULT 0,
  poin INT NOT NULL DEFAULT 0,
  CONSTRAINT fk_kelompok_grup
    FOREIGN KEY (grup_id) REFERENCES grup(id)
    ON DELETE CASCADE
);

CREATE TABLE voting_sessions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  token VARCHAR(255) NOT NULL UNIQUE,
  kelompok_id INT NOT NULL,
  has_voted TINYINT(1) NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_voting_sessions_kelompok
    FOREIGN KEY (kelompok_id) REFERENCES kelompok(id)
    ON DELETE CASCADE
);

CREATE TABLE vote_record (
  id INT AUTO_INCREMENT PRIMARY KEY,
  voter_kelompok_id INT NOT NULL,
  voted_kelompok_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_vote_record_voter
    FOREIGN KEY (voter_kelompok_id) REFERENCES kelompok(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_vote_record_voted
    FOREIGN KEY (voted_kelompok_id) REFERENCES kelompok(id)
    ON DELETE CASCADE
);

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  kode_kelompok VARCHAR(100) NULL,
  pertanyaan TEXT NOT NULL,
  jawaban TEXT NULL,
  status ENUM('pending', 'answered') NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert initial groups
INSERT INTO grup (name) VALUES
  ('Group 1'),
  ('Group 2'),
  ('Group 3'),
  ('Group 4'),
  ('Group 5'),
  ('Group 6');

-- Team codes use INT-T<id>-<first four letters of the team name>.
-- Usage counters and points are intentionally reset for a new deployment.
INSERT INTO kelompok (grup_id, name, unique_code, max_uses, used_count, poin) VALUES
  (1, 'Doom',          'INT-T1-DOOM', 13, 0, 0),
  (1, 'Tahu bulat',    'INT-T2-TAHU', 13, 0, 0),
  (1, 'Stellaris',     'INT-T3-STEL', 13, 0, 0),
  (1, 'Valorant',      'INT-T4-VALO', 13, 0, 0),
  (2, 'Minecraft',     'INT-T5-MINE', 13, 0, 0),
  (2, 'Apex Legends',  'INT-T6-APEX', 13, 0, 0),
  (2, 'Moo Whoo',      'INT-T7-MOOW', 13, 0, 0),
  (2, 'Super Sus',     'INT-T8-SUPE', 13, 0, 0),
  (3, 'The Spike',     'INT-T9-THES', 13, 0, 0),
  (3, 'Far Cry',       'INT-T10-FARC', 13, 0, 0),
  (3, 'Tekken',        'INT-T11-TEKK', 13, 0, 0),
  (3, 'Free Fire',     'INT-T12-FREE', 13, 0, 0),
  (4, 'Stumble Guys',  'INT-T13-STUM', 13, 0, 0),
  (4, 'Terraria',      'INT-T14-TERR', 13, 0, 0),
  (4, 'Assetto Corsa', 'INT-T15-ASSE', 13, 0, 0),
  (4, 'Resident Evil', 'INT-T16-RESI', 13, 0, 0),
  (5, 'PEAK',          'INT-T17-PEAK', 13, 0, 0),
  (5, 'Talking Tom',   'INT-T18-TALK', 13, 0, 0),
  (5, 'Tetris',        'INT-T19-TETR', 13, 0, 0),
  (5, 'Super Mario',   'INT-T20-SUPE', 13, 0, 0),
  (6, 'FIFA',          'INT-T21-FIFA', 13, 0, 0),
  (6, 'Elden Ring',    'INT-T22-ELDE', 13, 0, 0),
  (6, 'Roblox',        'INT-T23-ROBL', 13, 0, 0),
  (6, 'Dread Out',     'INT-T24-DREA', 13, 0, 0);

-- Verify
SELECT 'Database setup completed successfully!' AS status;
SELECT COUNT(*) AS total_tables FROM information_schema.tables
WHERE table_schema = 'interpes';
SELECT COUNT(*) AS total_kelompok FROM kelompok;
