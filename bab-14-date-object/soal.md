# Soal Bab 14: Date Object

## 🎯 Tujuan

Setelah mengerjakan latihan ini, kamu diharapkan mampu:

- Membuat Date Object menggunakan `new Date()`.
- Membuat tanggal tertentu.
- Mengambil informasi tanggal menggunakan Getter Methods.
- Memformat tanggal agar mudah dibaca.
- Mengubah tanggal menggunakan Setter Methods.
- Menghitung selisih antara dua tanggal.
- Menggunakan Date Object untuk menyelesaikan masalah sederhana dalam aplikasi.

---

# Soal 1 - Menampilkan Waktu Sekarang

Buat sebuah program yang menampilkan waktu saat ini menggunakan `new Date()`.

Contoh output:

    Waktu sekarang:
    Thu Aug 13 2026 09:10:00 GMT+0700

> Output akan berbeda sesuai waktu pada komputer masing-masing.

---

# Soal 2 - Mengambil Komponen Tanggal

Gunakan Date Object untuk mengambil:

- Tahun
- Bulan
- Tanggal
- Hari
- Jam
- Menit

Gunakan method:

    getFullYear()
    getMonth()
    getDate()
    getDay()
    getHours()
    getMinutes()

Tampilkan dengan format:

    Tahun  : 2026
    Bulan  : 8
    Tanggal: 13
    Hari   : 4
    Jam    : 09
    Menit  : 10

> Ingat bahwa `getMonth()` dimulai dari `0`.

---

# Soal 3 - Membuat Tanggal Spesifik

Buat Date Object untuk tanggal:

**17 Agustus 1945 pukul 10:00.**

Gunakan:

    new Date(tahun, bulan, tanggal, jam, menit)

Kemudian tampilkan tanggal tersebut menggunakan `console.log()`.

> Perhatikan bahwa indeks bulan pada JavaScript dimulai dari `0`.

---

# Soal 4 - Menampilkan Nama Hari

Buat array berikut:

    const namaHari = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];

Gunakan `getDay()` untuk menentukan nama hari dari tanggal:

    const tanggal = new Date("2026-08-17");

Output:

    Hari: Senin

---

# Soal 5 - Menampilkan Nama Bulan

Buat array nama bulan:

    const namaBulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

Gunakan `getMonth()` untuk mendapatkan nama bulan dari:

    const tanggal = new Date("2026-08-17");

Output:

    Bulan: Agustus

---

# Soal 6 - Format Tanggal

Diberikan:

    const tanggal = new Date("2026-08-17");

Tampilkan tanggal dengan format:

    17/08/2026

Gunakan Getter Methods dan `padStart()`.

---

# Soal 7 - Format Tanggal Indonesia

Diberikan:

    const tanggal = new Date("2026-08-17");

Gunakan `toLocaleDateString()` untuk menghasilkan format tanggal Indonesia yang lengkap.

Output:

    Senin, 17 Agustus 2026

---

# Soal 8 - Mengubah Tanggal

Diberikan:

    const tanggal = new Date("2026-08-17");

Gunakan Setter Method untuk mengubah tanggal tersebut menjadi:

    25 Desember 2026

Gunakan:

    setMonth()
    setDate()

Kemudian tampilkan hasilnya.

---

# Soal 9 - Prediksi Output

Apa output dari program berikut?

    const tanggal = new Date(2026, 0, 1);

    console.log(tanggal.getMonth());
    console.log(tanggal.getDate());
    console.log(tanggal.getFullYear());

Tuliskan output dan jelaskan mengapa `getMonth()` menghasilkan nilai tersebut.

---

# Soal 10 - Prediksi Output

Perhatikan program berikut:

    const tanggal = new Date("2026-08-17");

    console.log(tanggal.getFullYear());
    console.log(tanggal.getDate());

Apa output dari program tersebut?

---

# Soal 11 - Menghitung Umur

Buat program yang menghitung umur seseorang berdasarkan tahun lahir.

Contoh:

    const tahunLahir = 2008;

Gunakan tahun dari Date Object saat ini untuk menghitung umur.

Output contoh:

    Umur: 18 tahun

> Fokus pada penggunaan `new Date()` dan `getFullYear()`.

---

# 💼 Study Case 1 - Sistem Deadline Tugas

Sebuah sistem pembelajaran ingin menampilkan batas waktu pengumpulan tugas.

Tanggal sekarang:

    const sekarang = new Date("2026-08-13");

Deadline tugas:

    const deadline = new Date("2026-08-20");

Buat program yang menghitung berapa hari lagi sebelum deadline.

Output:

    Deadline: 20 Agustus 2026
    Sisa waktu: 7 hari lagi

Jika deadline sudah lewat, tampilkan:

    Deadline sudah terlewat.

Gunakan konsep:

    Date Object
    getTime()

Gunakan perhitungan millisecond untuk mendapatkan selisih hari.

---

# 💼 Study Case 2 - Sistem Jatuh Tempo Pembayaran

Sebuah aplikasi memiliki tanggal transaksi:

    const tanggalTransaksi = new Date("2026-08-13");

Pembayaran harus dilakukan **7 hari setelah transaksi**.

Gunakan Setter Method untuk menentukan tanggal jatuh tempo.

Output:

    Tanggal Transaksi : 13 Agustus 2026
    Jatuh Tempo       : 20 Agustus 2026

Gunakan:

    setDate()

Kemudian format tanggal menggunakan:

    toLocaleDateString()

---

# ⭐ Challenge - Sistem Informasi Event

Buat program untuk menampilkan informasi sebuah event.

Data:

    const namaEvent = "JavaScript Bootcamp";
    const tanggalEvent = new Date("2026-09-05");

Program harus menghasilkan:

    =============================
         INFORMASI EVENT
    =============================

    Nama Event : JavaScript Bootcamp
    Hari       : Sabtu
    Tanggal    : 5 September 2026

    =============================

Gunakan:

- `getDay()`
- `getDate()`
- `getMonth()`
- `getFullYear()`

Buat array nama hari dan nama bulan untuk mendapatkan nama hari dan bulan.

---

# 🚀 Final Challenge - Sistem Reminder Tugas

Buat program sederhana untuk mencatat deadline beberapa tugas.

Gunakan data berikut:

    const tugas = [
      {
        nama: "Membuat Website Portfolio",
        deadline: "2026-08-20",
      },
      {
        nama: "Mengerjakan Latihan JavaScript",
        deadline: "2026-08-15",
      },
      {
        nama: "Presentasi Project",
        deadline: "2026-09-01",
      },
    ];

Gunakan perulangan untuk menampilkan seluruh tugas beserta deadline dan statusnya.

Contoh output:

    ===== DAFTAR TUGAS =====

    1. Membuat Website Portfolio
       Deadline: 20 Agustus 2026
       Status  : 7 hari lagi

    2. Mengerjakan Latihan JavaScript
       Deadline: 15 Agustus 2026
       Status  : 2 hari lagi

    3. Presentasi Project
       Deadline: 1 September 2026
       Status  : 19 hari lagi

Jika deadline sudah lewat, tampilkan:

    Status: Deadline sudah terlewat.

Gunakan konsep yang sudah dipelajari:

- `new Date()`
- `getFullYear()`
- `getMonth()`
- `getDate()`
- `getDay()`
- `getTime()`
- `toLocaleDateString()`
- Setter Method
- Perhitungan selisih waktu

---

# 🧠 Pertanyaan Refleksi

Jawab dengan bahasamu sendiri.

1. Apa fungsi `new Date()`?
2. Mengapa bulan pada JavaScript dimulai dari `0`?
3. Apa perbedaan `getDate()` dan `getDay()`?
4. Apa fungsi `getTime()`?
5. Mengapa kita perlu menggunakan `getMonth() + 1` ketika menampilkan bulan?
6. Apa perbedaan Getter Method dan Setter Method?
7. Apa kegunaan `toLocaleDateString()`?
8. Bagaimana cara menghitung selisih dua tanggal?
9. Dalam aplikasi nyata, fitur apa saja yang dapat menggunakan Date Object?