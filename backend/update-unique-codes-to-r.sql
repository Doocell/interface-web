-- Safely update existing kelompok codes without dropping tables or data.
-- Run this once against the deployed interpes database.

USE interpes;

UPDATE kelompok
SET unique_code = CONCAT(
  'INT-R',
  id,
  '-',
  UPPER(LEFT(REPLACE(name, ' ', ''), 4))
)
WHERE id BETWEEN 1 AND 24;

SELECT id, name, unique_code
FROM kelompok
ORDER BY id;
