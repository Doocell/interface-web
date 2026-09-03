# 🗳️ TESTING FITUR VOTE

## ✅ Perubahan yang Dilakukan

### Frontend (Vote.jsx)
- ❌ **REMOVED**: Import Supabase
- ✅ **ADDED**: Connect ke backend MySQL Express API
- ✅ **ADDED**: 3-step flow:
  1. **Input Kode Kelompok** → Verifikasi unique code
  2. **Pilih Kandidat** → Tampilkan kelompok lain dalam grup yang sama
  3. **Success Message** → Robot "Lau udah ngevote mpruy"

### Backend API Endpoints
- `POST /api/voting/verify-code` → Verifikasi kode kelompok
- `POST /api/voting/submit` → Submit vote

---

## 🧪 CARA TESTING

### **Persiapan: Pastikan Service Running**

Terminal 1 (Root folder):
```bash
cd "D:\WEB INTERFACE 2026\interface-web"
npm run dev:full
```

Harus muncul:
```
[FE] Local: http://localhost:8080/
[BE] konek
[BE] Server di port 3000
```

---

## 📝 TEST FLOW LENGKAP

### **1. Buka Halaman Vote**
```
http://localhost:8080/vote
```

✅ **Expected**: Muncul form "Masukkan Kode Kelompok"

---

### **2. Test Input Kode Kelompok**

#### **Test Case 1: Kode Valid**
- Input: `TEAM001` (atau unique_code dari database)
- Klik: **VERIFIKASI**
- ✅ **Expected**:
  - Loading "MEMVERIFIKASI..."
  - Redirect ke halaman pilih kandidat
  - Muncul info: "Voting sebagai: Kelompok 1"
  - Tampil 2-4 kartu kelompok lain (tidak termasuk kelompok sendiri)

#### **Test Case 2: Kode Invalid**
- Input: `WRONGCODE`
- Klik: **VERIFIKASI**
- ✅ **Expected**:
  - Muncul error merah: "⚠️ Kode kelompok tidak valid."

#### **Test Case 3: Kode Kosong**
- Input: (kosong)
- Klik: **VERIFIKASI**
- ✅ **Expected**:
  - Muncul error merah: "⚠️ Kode kelompok wajib diisi!"

---

### **3. Test Pilih Kandidat & Vote**

#### **Test Case 1: Vote Sukses**
1. Masukkan kode valid: `TEAM001`
2. Klik salah satu kartu kelompok (contoh: Kelompok 2)
3. ✅ **Expected**: Kartu ter-highlight kuning, ada checkmark ✓
4. Klik tombol **VOTE**
5. ✅ **Expected**:
   - Loading "VOTING..."
   - Redirect ke success screen
   - Muncul robot dengan text: "Lau udah ngevote mpruy"

#### **Test Case 2: Vote Tanpa Pilih Kandidat**
1. Klik tombol **VOTE** langsung (tanpa pilih kartu)
2. ✅ **Expected**: Alert popup "Silakan pilih kelompok yang ingin kamu vote terlebih dahulu!"

#### **Test Case 3: Vote 2x dengan Kode yang Sama**
1. Vote dengan `TEAM001` → Pilih Kelompok 2 → VOTE
2. Refresh halaman → Input `TEAM001` lagi → Pilih Kelompok 3 → VOTE
3. ✅ **Expected**: Error message: "⚠️ Nakal Banget Ih.... Dibilanginnya Cuman Boleh Ngevote Sekali Juga 😤😤😤"

---

## 🔍 VERIFIKASI DATABASE

Setelah vote sukses, cek di **phpMyAdmin**:

### **Buka phpMyAdmin**
```
http://localhost/phpmyadmin
```

### **1. Table `voting_sessions`**
Database: `Interpes` → Table: `voting_sessions`

✅ **Harus ada record baru:**
| id | token | kelompok_id | has_voted | created_at |
|----|-------|-------------|-----------|------------|
| 1  | (hex) | 1           | 1         | (timestamp)|

### **2. Table `vote_record`**
Database: `Interpes` → Table: `vote_record`

✅ **Harus ada record baru:**
| id | voter_kelompok_id | voted_kelompok_id | created_at |
|----|-------------------|-------------------|------------|
| 1  | 1                 | 2                 | (timestamp)|

**Artinya**: Kelompok 1 vote untuk Kelompok 2 ✅

### **3. Table `kelompok` (used_count bertambah)**
Database: `Interpes` → Table: `kelompok`

✅ **Cek kolom `used_count`:**
- Kelompok dengan `unique_code = TEAM001` → `used_count` harus naik +1

---

## 🌐 TEST API LANGSUNG (Via Browser)

### **Test 1: Verify Code**
Buka Postman atau gunakan curl:

```bash
curl -X POST http://localhost:3000/api/voting/verify-code ^
  -H "Content-Type: application/json" ^
  -d "{\"unique_code\":\"TEAM001\"}"
```

✅ **Expected Response:**
```json
{
  "success": true,
  "message": "KODE BENAR",
  "token": "abcd1234...",
  "kelompok": {
    "id": 1,
    "name": "Kelompok 1",
    "grup_id": 1,
    "grup_name": "Grup A"
  },
  "candidates": [
    { "id": 2, "name": "Kelompok 2" },
    { "id": 3, "name": "Kelompok 3" }
  ]
}
```

### **Test 2: Submit Vote**
Copy `token` dari response di atas, lalu:

```bash
curl -X POST http://localhost:3000/api/voting/submit ^
  -H "Content-Type: application/json" ^
  -d "{\"token\":\"PASTE_TOKEN_HERE\",\"voted_kelompok_id\":2}"
```

✅ **Expected Response:**
```json
{
  "success": true,
  "message": "Vote berhasil disimpan."
}
```

---

## 🐛 TROUBLESHOOTING

### **Error: "Terjadi kesalahan koneksi ke server"**
**Solusi**:
1. Cek backend running: `http://localhost:3000/api/health`
2. Cek terminal backend → ada error log?
3. Pastikan XAMPP MySQL running

### **Error: "Kode kelompok tidak valid"**
**Solusi**:
1. Cek database `kelompok` → ada `unique_code` yang sesuai?
2. Coba query manual di phpMyAdmin:
   ```sql
   SELECT * FROM kelompok WHERE unique_code = 'TEAM001';
   ```

### **Error: "pool failed to retrieve a connection"**
**Solusi**:
1. Cek `backend/.env` → `DB_PASSWORD` sudah benar?
2. Test connection manual di terminal:
   ```bash
   cd "D:\WEB INTERFACE 2026\interface-web\backend"
   npm run check
   ```

### **Kartu Kandidat Tidak Muncul**
**Solusi**:
1. Cek F12 → Console → Ada error?
2. Pastikan ada minimal 2 kelompok dalam 1 grup
3. Query manual:
   ```sql
   SELECT * FROM kelompok WHERE grup_id = 1;
   ```
   Harus ada minimal 2 rows.

---

## ✅ CHECKLIST TESTING

Centang (✅) setiap yang sudah dicoba:

### API Backend:
- [ ] ✅ POST `/api/voting/verify-code` (kode valid)
- [ ] ✅ POST `/api/voting/verify-code` (kode invalid)
- [ ] ✅ POST `/api/voting/submit` (vote sukses)
- [ ] ✅ POST `/api/voting/submit` (vote 2x → error)

### Frontend UI:
- [ ] ✅ Input kode valid → tampil kandidat
- [ ] ✅ Input kode invalid → error message
- [ ] ✅ Pilih kartu kandidat → highlight kuning
- [ ] ✅ Klik VOTE → success screen
- [ ] ✅ Vote 2x → error "Nakal Banget Ih..."

### Database:
- [ ] ✅ Record masuk `voting_sessions`
- [ ] ✅ Record masuk `vote_record`
- [ ] ✅ `used_count` bertambah di `kelompok`

### Responsive:
- [ ] ✅ Mobile (375px) → form responsive
- [ ] ✅ Tablet (768px) → kartu rapi
- [ ] ✅ Desktop (1920px) → layout centered

---

## 🎯 QUICK TEST (3 Menit)

1. ✅ Buka `http://localhost:8080/vote`
2. ✅ Input kode: `TEAM001` → Klik VERIFIKASI
3. ✅ Pilih salah satu kartu → Klik VOTE
4. ✅ Muncul robot "Lau udah ngevote mpruy"
5. ✅ Cek phpMyAdmin → Table `vote_record` ada data baru

Kalau 5 step ini sukses = **FITUR VOTE WORKS!** 🎉

---

## 📊 DATA SAMPLE UNTUK TESTING

Jika database kosong, insert data ini di phpMyAdmin:

```sql
-- Insert Grup
INSERT INTO grup (id, name) VALUES 
(1, 'Grup A'),
(2, 'Grup B');

-- Insert Kelompok
INSERT INTO kelompok (id, grup_id, name, unique_code, max_uses, used_count, poin) VALUES 
(1, 1, 'Kelompok 1', 'TEAM001', 50, 0, 0),
(2, 1, 'Kelompok 2', 'TEAM002', 50, 0, 0),
(3, 1, 'Kelompok 3', 'TEAM003', 50, 0, 0),
(4, 2, 'Kelompok 4', 'TEAM004', 50, 0, 0),
(5, 2, 'Kelompok 5', 'TEAM005', 50, 0, 0);
```

**Test Scenario:**
- Login dengan `TEAM001` (Kelompok 1, Grup A)
- Bisa vote: Kelompok 2 atau Kelompok 3 (sama-sama Grup A)
- TIDAK bisa vote: Kelompok 4 atau 5 (beda grup)

---

Silakan test dan kasih tau hasilnya! 🚀
