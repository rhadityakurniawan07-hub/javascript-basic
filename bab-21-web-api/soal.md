# Soal Latihan: User Dashboard

**JavaScript — Bab 19, 20, 21**  
_Tema: User Dashboard_

---

## 🎯 Tujuan

Setelah mengerjakan proyek ini, peserta diharapkan mampu:

- Menggunakan `async/await` dan `try...catch` untuk mengambil data dari server.
- Mengonversi data Object ↔ JSON dengan `JSON.stringify()` dan `JSON.parse()`.
- Memanfaatkan **Fetch API** untuk komunikasi dengan server.
- Menyimpan dan membaca data di browser menggunakan **Web Storage API** (`localStorage`).
- Mengelola navigasi halaman tanpa reload menggunakan **History API**.
- Membangun antarmuka pengguna yang dinamis dan responsif dengan DOM manipulation.

---

## 📋 Deskripsi Proyek

Buatlah sebuah **Dashboard Pengguna (User Dashboard)** berupa halaman web tunggal (Single Page Application) yang menampilkan daftar pengguna yang diambil dari API publik. Pengguna dapat melihat daftar, mencari, menandai favorit, mengganti tema, dan melihat detail pengguna — semuanya tanpa me-refresh halaman.

**API yang digunakan:**  
Gunakan [JSONPlaceholder](https://jsonplaceholder.typicode.com/) sebagai sumber data.

- Daftar semua pengguna: `GET https://jsonplaceholder.typicode.com/users`
- Detail satu pengguna: `GET https://jsonplaceholder.typicode.com/users/{id}`

---

## ⚙️ Fitur Wajib

### 1. Tampilan Daftar Pengguna
- Saat halaman pertama kali dimuat, tampilkan semua pengguna dalam bentuk **kartu**.
- Setiap kartu menampilkan:
  - Nama
  - Email
  - Nama perusahaan (company name)
- Tampilkan **indikator loading** (`"Memuat data..."`) saat data sedang diambil.
- Jika terjadi error (misal jaringan bermasalah), tampilkan pesan error yang ramah pengguna.

### 2. Pencarian / Filter Pengguna
- Tambahkan **kolom input pencarian** di bagian atas halaman.
- Saat pengguna mengetik, daftar kartu akan tersaring secara **real-time** berdasarkan nama pengguna (case-insensitive).

### 3. Tombol Favorit
- Setiap kartu memiliki **ikon/ tombol favorit** (misal: ☆ / ★).
- Saat tombol diklik, status favorit pengguna tersebut berubah (favorit / tidak favorit).
- Data favorit disimpan di **localStorage** sehingga ketika halaman di-refresh, status favorit tetap bertahan.

### 4. Detail Pengguna (Navigasi SPA)
- Saat kartu diklik, tampilkan halaman **detail pengguna** yang berisi:
  - Nama
  - Email
  - Alamat lengkap (street, suite, city, zipcode)
  - Telepon
  - Website
  - Nama perusahaan
- Gunakan **History API** (`pushState`) untuk mengubah URL menjadi `/user/{id}` tanpa reload.
- Sediakan tombol **"Kembali"** untuk kembali ke daftar pengguna.
- Saat tombol _Back_ / _Forward_ browser ditekan, halaman harus menyesuaikan (menggunakan event `popstate`).

### 5. Tema Gelap / Terang
- Tambahkan **tombol toggle tema** (🌙 / ☀️).
- Pilihan tema disimpan di localStorage.
- Saat halaman dimuat, tema diterapkan sesuai pilihan terakhir.

### 6. Pengelolaan Data dengan JSON
- Setelah data berhasil diambil dari API, simpan data tersebut ke `localStorage` dengan kunci `"usersData"`.
- Saat halaman dimuat, cek apakah data sudah ada di localStorage. Jika ada, tampilkan dari localStorage terlebih dahulu (sebagai cache), tetapi tetap lakukan permintaan ke API di latar belakang untuk memperbarui data jika ada perubahan.

---

## 🔧 Spesifikasi Teknis & Aturan

| Aspek | Ketentuan |
|-------|-----------|
| **Struktur HTML** | Gunakan satu file `index.html`. Bebas menggunakan CSS (bisa inline, internal, atau external). |
| **JavaScript** | Tulis semua kode dalam satu file `script.js` atau internal di `<script>`. |
| **Pengambilan Data** | Wajib menggunakan `fetch()` dengan `async/await` dan `try...catch`. |
| **Penyimpanan** | Wajib menggunakan `localStorage` untuk: daftar favorit, tema, dan cache data pengguna. |
| **Navigasi** | Wajib menggunakan `history.pushState()` dan `popstate`. |
| **Event** | Gunakan `addEventListener()` (bukan atribut `onclick` di HTML). |
| **Error Handling** | Setiap operasi `fetch` harus dibungkus `try...catch`. Jika gagal, tampilkan pesan error yang jelas kepada pengguna. |

---

## 📁 Struktur Folder (Saran)

```
project-user-dashboard/
├── index.html
├── style.css         (opsional)
└── script.js
```

> Jika menggunakan satu file HTML, semua CSS dan JS bisa ditulis di dalam file tersebut.

---

## 🌟 Fitur Tambahan (Opsional — Nilai Plus)

- **Animasi loading** yang lebih menarik (misal spinner CSS).
- **Paginasi** jika jumlah pengguna banyak (opsional).
- **Ekspor / impor** data favorit ke file JSON (menggunakan Blob/Download).
- **Geolocation** — tambahkan fitur "Lihat di Maps" pada halaman detail menggunakan Geolocation API (ambil koordinat dari alamat pengguna melalui Geocoding atau gunakan koordinat dummy).
- **Clipboard API** — tombol "Salin Email" di halaman detail.

---

## 📝 Kriteria Penilaian

| Kriteria | Bobot |
|----------|-------|
| **Kebenaran fungsional** — semua fitur wajib berjalan | 40% |
| **Penggunaan async/await & error handling** | 20% |
| **Pemanfaatan Web API** (Fetch, Storage, History) | 20% |
| **Kualitas kode** (rapi, mudah dibaca, komentar) | 10% |
| **UI/UX** (tampilan rapi, responsif, feedback pengguna) | 10% |

---

## 🧪 Contoh Skenario Pengujian

1. **Memuat halaman pertama kali**  
   - Tampilkan loading → data muncul dalam bentuk kartu.  
   - URL masih `/`.

2. **Mencari pengguna**  
   - Ketik "Lea" di kotak pencarian → hanya pengguna dengan nama mengandung "Lea" yang muncul.

3. **Menandai favorit**  
   - Klik ikon bintang pada kartu → ikon berubah (★).  
   - Refresh halaman → status favorit tetap ada.

4. **Melihat detail**  
   - Klik salah satu kartu → tampilan berubah menjadi halaman detail.  
   - URL berubah menjadi `/user/1`.  
   - Klik tombol "Kembali" → kembali ke daftar.

5. **Navigasi browser**  
   - Klik _Back_ browser → kembali ke daftar.  
   - Klik _Forward_ browser → kembali ke detail.

6. **Ganti tema**  
   - Klik tombol tema → warna latar dan teks berubah.  
   - Refresh halaman → tema tetap sesuai pilihan terakhir.

7. **Simulasi error**  
   - Matikan koneksi internet, lalu refresh → muncul pesan error.

---

## 💡 Tips

- Gunakan `Promise.all()` jika ingin mengambil semua data user sekaligus.
- Untuk cache data, simpan hasil `fetch` pertama ke `localStorage` dengan `JSON.stringify()`.
- Untuk detail, bisa ambil dari data yang sudah ada di cache atau lakukan `fetch` ulang.
- Manfaatkan `event delegation` untuk menangani klik pada kartu yang dinamis.
- Gunakan CSS class untuk mengontrol tampilan tema gelap/terang.

---

**Selamat mengerjakan!** 🚀