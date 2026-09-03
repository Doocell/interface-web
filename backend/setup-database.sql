-- Setup database Interface 2026
-- File ini bisa langsung di-import tanpa select database

-- Create database jika belum ada
CREATE DATABASE IF NOT EXISTS Interpes;

-- Gunakan database Interpes
USE Interpes;

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

-- Insert sample data (opsional)
INSERT INTO grup (name) VALUES 
  ('Grup A'),
  ('Grup B'),
  ('Grup C');

INSERT INTO kelompok (grup_id, name, unique_code, max_uses, poin) VALUES
  (1, 'Kelompok 1', 'TEAM001', 50, 0),
  (1, 'Kelompok 2', 'TEAM002', 50, 0),
  (2, 'Kelompok 3', 'TEAM003', 50, 0),
  (2, 'Kelompok 4', 'TEAM004', 50, 0),
  (3, 'Kelompok 5', 'TEAM005', 50, 0);

-- Verify
SELECT 'Database setup completed successfully!' AS status;
SELECT COUNT(*) AS total_tables FROM information_schema.tables 
WHERE table_schema = 'Interpes';
SELECT COUNT(*) AS total_kelompok FROM kelompok;
