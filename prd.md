# Product Requirements Document (PRD): Website Interface

## 1. Meta Information
- **Project Name:** Website Interface
- **Target Audience:** Mahasiswa Baru Jurusan Ilmu Komputer
- **Document Owner:** DANY RISKY ARDIANSYAH (NIM: 2404140100)
- **Status:** Draft / Conceptual
- **Purpose of Document:** Sebagai pedoman utama (source of truth) bagi tim pengembang dan AI Agent untuk menjaga konsistensi selama proses pengembangan website.

---

## 2. Latar Belakang & Masalah
Saat ini, informasi terkait kegiatan pengenalan lingkungan jurusan (Interface) tersebar di berbagai platform seperti grup chat, Google Drive, dan Google Classroom. Hal ini menyebabkan:
- Mahasiswa baru kesulitan mencari informasi secara cepat dan terpusat.
- Meningkatnya risiko miskomunikasi.
- Kurangnya representasi identitas Jurusan Ilmu Komputer yang seharusnya menonjol dalam pemanfaatan teknologi.

## 3. Tujuan Produk (Product Goals)
1. **Sentralisasi Informasi:** Menjadikan website sebagai pusat informasi resmi satu pintu untuk seluruh rangkaian acara Interface.
2. **Kemudahan Akses:** Mengintegrasikan platform eksternal (Google Drive, Google Classroom) ke dalam satu antarmuka utama.
3. **Transparansi Penilaian:** Membangun semangat kompetitif dan transparansi melalui fitur *Score Leaderboard*.
4. **Branding Jurusan:** Memberikan pengalaman digital yang modern untuk merepresentasikan identitas Jurusan Ilmu Komputer.

---

## 4. Konsep Sistem & Arsitektur (High-Level)
- **Fokus Utama:** Front-end sebagai pusat akses antarmuka (portal hub).
- **Backend Minimalis:** Website tidak membangun backend yang kompleks, melainkan mengarahkan (routing/redirect) pengguna ke layanan yang sudah ada (G-Drive, G-Classroom). Hanya memerlukan database sederhana untuk mendukung operasional fitur mandiri (seperti FAQ dan Leaderboard).

---

## 5. Fitur Utama (Core Features)

### 5.1. Buku Panduan
- **Deskripsi:** Halaman yang memuat buku panduan resmi Interface.
- **Konten:** Informasi teknis kegiatan, tata tertib, perlengkapan yang dibutuhkan, *timeline* acara, dan informasi penting lainnya.

### 5.2. Score Leaderboard
- **Deskripsi:** Peringkat 10 kelompok terbaik berdasarkan akumulasi nilai.
- **Fungsi:** Transparansi penilaian dan memacu semangat kompetisi.
- **Aturan Pembaruan (Penting untuk AI State):** Pembaruan dilakukan manual/terjadwal untuk tidak membebani server dan menjaga proses rekapitulasi.
  - *Jadwal Update:* 
    1. Peluncuran saat Technical Meeting (Tidak ada update hingga H-1 Day 1).
    2. Malam sebelum Day 1.
    3. Malam setelah Day 1.
    4. Malam setelah Day 2 (Berhenti sementara hingga H-1 Makrab).
    5. Malam sebelum Makrab.
    6. Update berkala setiap malam selama Makrab hingga Day 3.

### 5.3. Quest Collect
- **Deskripsi:** Portal pengumpulan tugas.
- **Mekanisme:** Mengarahkan (redirect) pengguna langsung ke Google Classroom yang telah disiapkan.

### 5.4. Vote
- **Deskripsi:** Fitur interaktif untuk melakukan *voting*.
- **Penggunaan:** Digunakan pada beberapa rangkaian permainan atau kegiatan interaktif selama kegiatan Interface.

### 5.5. Game Description
- **Deskripsi:** Halaman penjelasan mengenai *game* dan acara inti.
- **Konten:** Tujuan, mekanisme, dan aturan main dari setiap permainan.

### 5.6. Map (Peta Lokasi)
- **Deskripsi:** Peta interaktif atau visual statis mengenai lokasi kegiatan.
- **Konten:** Letak pos permainan, Zona Hijau, dan Zona Merah (khusus untuk kegiatan Malam Keakraban / Makrab).

### 5.7. Question Section dan FAQ
- **Deskripsi:** Halaman untuk mengakomodasi pertanyaan mahasiswa baru.
- **Mekanisme:** Peserta dapat mengirim pertanyaan. Pertanyaan yang repetitif akan dirangkum oleh admin ke dalam daftar *Frequently Asked Questions* (FAQ).

### 5.8. Interface Information
- **Deskripsi:** Halaman *About* atau profil acara.
- **Konten:** Tema kegiatan, struktur acara, dan kontak panitia (Contact Person).

---

## 6. Pembagian Tugas (Roles & Responsibilities)

Untuk koordinasi pengembangan dan operasional, berikut adalah pembagian kerjanya:

- **Sie Perkap:** 
  - Administrator website.
  - Memperbarui *Score Leaderboard* sesuai jadwal.
  - Bekerja sama dengan PDD dalam *development*.
- **Sie PDD:** 
  - Mengurus *User Interface* (UI) dan *User Experience* (UX) agar visualnya menarik.
  - Melakukan implementasi dan *testing* fitur website.
- **Sie Acara:** 
  - *Content Creator* untuk deskripsi rangkaian kegiatan dan instruksi permainan.
  - Memastikan kesesuaian informasi di web dengan kondisi riil di lapangan.
- **Sie Kreatif:** 
  - Menyusun *Buku Panduan*, sistem penilaian, dan indikator penugasan.
  - Penyuplai utama data nilai yang akan di-input ke *Score Leaderboard*.

---

## 7. Tantangan Pengembangan (Risks & Mitigations)
1. **Pengembangan Antarmuka:** Memastikan seluruh fitur berjalan optimal dan responsif di berbagai perangkat (Mobile First direkomendasikan).
2. **Struktur Database:** Membutuhkan skema DB sederhana yang tangguh untuk fitur FAQ dan Leaderboard tanpa menjadi *over-engineered*.
3. **Konsistensi Update:** Kedisiplinan Sie Perkap dan Sie Kreatif dalam *pipeline* rekap nilai agar Leaderboard *up-to-date* sesuai jadwal.
4. **Koordinasi Konten:** Memastikan tidak ada perbedaan informasi antara Sie Acara, Sie Kreatif, dan data yang tampil di website.
5. **Quality Assurance:** Wajib dilakukan pengujian intensif (*testing*) sebelum kegiatan dimulai untuk mencegah *error* atau *downtime*.