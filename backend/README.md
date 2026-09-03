# Backend Interface 2026

Backend API untuk aplikasi Interface 2026 menggunakan Express.js dan MariaDB.

## 📋 Prerequisites

1. **Node.js** (v16 atau lebih tinggi)
2. **MariaDB** atau **MySQL** (v10.5+ atau v8.0+)

### Install MariaDB/MySQL:

**Windows:**
- Download [XAMPP](https://www.apachefriends.org/) (sudah include MariaDB)
- Atau download [MySQL](https://dev.mysql.com/downloads/installer/)

**MacOS:**
```bash
brew install mariadb
# atau
brew install mysql
```

**Linux:**
```bash
sudo apt install mariadb-server
# atau
sudo apt install mysql-server
```

## 🚀 Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Setup Database

**Start MariaDB/MySQL:**

**Jika pakai XAMPP:**
- Buka XAMPP Control Panel
- Start Apache dan MySQL

**Jika install standalone:**
```bash
# Windows
net start MySQL

# Linux/Mac
sudo systemctl start mariadb
# atau
sudo systemctl start mysql
```

### 3. Create Database & Tables

```bash
# Login ke MySQL/MariaDB
mysql -u root -p

# Create database
CREATE DATABASE Interpes;

# Use database
USE Interpes;

# Import schema
SOURCE schema.sql;
# atau copy-paste isi schema.sql

# Exit
exit;
```

### 4. Configure Environment

Copy `.env.example` ke `.env`:

```bash
cp .env.example .env
```

Edit `.env` sesuai konfigurasi database Anda:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=Interpes
PORT=3000
```

### 5. Run Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server akan berjalan di: `http://localhost:3000`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```

### Kelompok
```
GET    /api/kelompok
POST   /api/kelompok
GET    /api/kelompok/:id
PUT    /api/kelompok/:id
DELETE /api/kelompok/:id
```

### Questions
```
GET    /api/questions
POST   /api/questions
GET    /api/questions/:id
PUT    /api/questions/:id
DELETE /api/questions/:id
```

### Voting
```
POST   /api/vote
GET    /api/vote/results
```

## 🛠️ Troubleshooting

### Error: "eror" saat start server

**Masalah**: Database tidak terkoneksi

**Solusi**:
1. Pastikan MariaDB/MySQL sudah running
2. Cek credential di `.env` sudah benar
3. Pastikan database `Interpes` sudah dibuat
4. Test koneksi manual:
   ```bash
   mysql -u root -p -h localhost
   ```

### Error: "Cannot find module"

**Masalah**: Dependencies belum terinstall

**Solusi**:
```bash
npm install
```

### Port 3000 already in use

**Masalah**: Port sudah digunakan aplikasi lain

**Solusi**:
1. Ganti port di `.env`:
   ```env
   PORT=3001
   ```
2. Atau kill process yang pakai port 3000:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   
   # Linux/Mac
   lsof -ti:3000 | xargs kill -9
   ```

## 📦 Database Schema

Lihat `schema.sql` untuk struktur database lengkap.

**Tables:**
- `grup` - Grup/kategori kelompok
- `kelompok` - Data kelompok peserta
- `voting_sessions` - Session voting
- `vote_record` - Record vote yang sudah dilakukan
- `questions` - Pertanyaan dari peserta

## 🔐 Security Notes

- ⚠️ **JANGAN** commit file `.env` ke Git
- ⚠️ File `.env` sudah ada di `.gitignore`
- ⚠️ Ganti password database di production
- ⚠️ Set `NODE_ENV=production` saat deploy

## 📝 Development

Struktur folder:
```
backend/
├── src/
│   ├── config/          # Database config
│   ├── routes/          # API routes
│   ├── app.js           # Express app
│   └── server.js        # Server entry point
├── schema.sql           # Database schema
├── .env                 # Environment variables (local)
├── .env.example         # Environment template
└── package.json
```

## 🤝 Contributing

1. Create feature branch
2. Commit changes
3. Push to branch
4. Create Pull Request

## 📄 License

ISC
