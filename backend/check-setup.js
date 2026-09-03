#!/usr/bin/env node

require('dotenv').config();
const mariadb = require('mariadb');

console.log('🔍 Checking Backend Setup...\n');

// Check environment variables
console.log('1️⃣ Environment Variables:');
const envVars = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME', 'PORT'];
let envOk = true;

envVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`   ✅ ${varName}: ${varName === 'DB_PASSWORD' ? '***' : value}`);
  } else {
    console.log(`   ❌ ${varName}: NOT SET`);
    envOk = false;
  }
});

if (!envOk) {
  console.log('\n⚠️  Beberapa environment variables belum diset!');
  console.log('   Silakan copy .env.example ke .env dan isi nilai yang sesuai.');
  process.exit(1);
}

// Check database connection
console.log('\n2️⃣ Database Connection:');

async function checkDatabase() {
  let pool;
  try {
    pool = mariadb.createPool({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectionLimit: 1,
    });

    const conn = await pool.getConnection();
    console.log(`   ✅ Connected to ${process.env.DB_NAME} database`);

    // Check tables
    const tables = await conn.query('SHOW TABLES');
    console.log(`\n3️⃣ Database Tables:`);
    
    const requiredTables = ['grup', 'kelompok', 'voting_sessions', 'vote_record', 'questions'];
    const existingTables = tables.map(row => Object.values(row)[0]);
    
    let tablesOk = true;
    requiredTables.forEach(tableName => {
      if (existingTables.includes(tableName)) {
        console.log(`   ✅ ${tableName}`);
      } else {
        console.log(`   ❌ ${tableName} - NOT FOUND`);
        tablesOk = false;
      }
    });

    if (!tablesOk) {
      console.log('\n⚠️  Beberapa tabel belum ada!');
      console.log('   Silakan import schema.sql ke database.');
      console.log('   Cara: mysql -u root -p Interpes < schema.sql');
    }

    conn.release();
    await pool.end();

    console.log('\n✨ Setup Check Complete!');
    
    if (envOk && tablesOk) {
      console.log('\n🚀 Backend siap dijalankan!');
      console.log('   Jalankan: npm run dev');
    } else {
      console.log('\n⚠️  Ada masalah yang perlu diperbaiki.');
      process.exit(1);
    }

  } catch (error) {
    console.log(`   ❌ Connection failed: ${error.message}`);
    console.log('\n💡 Troubleshooting:');
    console.log('   1. Pastikan MariaDB/MySQL sudah running');
    console.log('   2. Cek username dan password di .env');
    console.log('   3. Pastikan database "Interpes" sudah dibuat');
    console.log('   4. Test manual: mysql -u root -p');
    
    if (pool) await pool.end();
    process.exit(1);
  }
}

checkDatabase();
