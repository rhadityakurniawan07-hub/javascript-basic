# Soal Praktik - Bab 5: Macam-macam Operator di JavaScript

# 🎯 Tujuan

Setelah menyelesaikan latihan ini, kamu diharapkan mampu:

- Menggunakan operator aritmatika untuk melakukan perhitungan.
- Menggunakan operator assignment untuk mengubah nilai variabel.
- Membedakan penggunaan `==` dan `===`.
- Menggunakan operator perbandingan dan operator logika.
- Memahami prioritas operator dalam JavaScript.
- Menganalisis serta memperbaiki kode yang mengandung kesalahan sederhana.

---

# 📌 Ketentuan

- Kerjakan menggunakan **JavaScript ES6**.
- Simpan jawaban pada file **index.js**.
- Jalankan menggunakan **Node.js**.
- Gunakan `console.log()` untuk menampilkan hasil.
- Berikan komentar pada setiap nomor soal.

---

# 📝 Soal 1 — Operator Aritmatika

Diketahui:

```javascript
const panjang = 15;
const lebar = 8;
```

Hitung:

- Luas persegi panjang
- Keliling persegi panjang

Output:

```text
Luas      : 120
Keliling  : 46
```

---

# 📝 Soal 2 — Modulus

Diketahui:

```javascript
const angka = 29;
```

Gunakan operator modulus (`%`) untuk mencari sisa hasil pembagian angka tersebut dengan:

- 2
- 4
- 5

Contoh Output:

```text
29 % 2 = ...
29 % 4 = ...
29 % 5 = ...
```

---

# 📝 Soal 3 — Increment & Decrement

Lengkapi program berikut.

```javascript
let stok = 20;

// Tambahkan stok sebanyak 5 menggunakan increment atau operator yang sesuai

// Kurangi stok sebanyak 5

console.log(stok);
```

Output akhirnya harus kembali menjadi:

```text
20
```

---

# 📝 Soal 4 — Assignment Operator

Diketahui:

```javascript
let saldo = 100000;
```

Lakukan operasi berikut secara berurutan:

- tambah 50000
- kurangi 25000
- bagi 5
- kalikan 2

Gunakan assignment operator (`+=`, `-=`, `*=`, `/=`).

Tampilkan hasil akhirnya.

---

# 📝 Soal 5 — Studi Kasus Kasir

Diketahui:

```javascript
const harga = 18000;
const jumlah = 6;
const diskon = 10000;
```

Hitung:

- Subtotal
- Total bayar setelah diskon

Output:

```text
Subtotal : ...
Total    : ...
```

---

# 📝 Soal 6 — Operator Perbandingan

Prediksi output berikut **tanpa menjalankan program**.

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(5 <= 3);
console.log(8 != 8);
console.log(12 !== "12");
```

Tuliskan hasilnya satu per satu.

---

# 📝 Soal 7 — == vs ===

Prediksi output berikut.

```javascript
console.log(10 == "10");
console.log(10 === "10");
console.log(false == 0);
console.log(false === 0);
console.log(null == undefined);
console.log(null === undefined);
```

Kemudian jelaskan secara singkat mengapa hasilnya berbeda.

---

# 📝 Soal 8 — Operator Logika

Diketahui:

```javascript
let sudahLogin = true;
let sudahVerifikasi = false;
let premium = true;
```

Buat variabel berikut:

```javascript
let bolehMasuk;
let dapatFiturPremium;
```

Ketentuan:

- `bolehMasuk` bernilai `true` jika pengguna sudah login **dan** sudah verifikasi.
- `dapatFiturPremium` bernilai `true` jika pengguna premium **atau** sudah verifikasi.

Tampilkan hasil keduanya.

---

# 📝 Soal 9 — Operator NOT

Diketahui:

```javascript
let lampuNyala = true;
```

Gunakan operator NOT (`!`) untuk menampilkan kondisi kebalikannya.

Output:

```text
false
```

---

# 📝 Soal 10 — Prioritas Operator

Prediksi output berikut tanpa menjalankan program.

```javascript
console.log(8 + 4 * 2);
console.log((8 + 4) * 2);
console.log(20 / 5 + 3 * 2);
```

Kemudian jelaskan mengapa hasilnya bisa berbeda.

---

# 📝 Soal 11 — Debugging

Perhatikan kode berikut.

```javascript
let angka = 20;

angka + 5;

console.log(angka);
```

1. Apa output program tersebut?
2. Mengapa hasilnya demikian?
3. Perbaiki program agar menghasilkan:

```text
25
```

---

# 📝 Soal 12 — Analisis Kode

Perhatikan program berikut.

```javascript
let umur = "18";

console.log(umur > 17);
console.log(umur === 18);
```

Tanpa menjalankan program:

- Tuliskan outputnya.
- Jelaskan alasan masing-masing output.

---

# 📝 Soal 13 — Studi Kasus Seleksi Peserta

Diketahui:

```javascript
let umur = 20;
let punyaKTP = true;
let sudahDaftar = true;
```

Peserta dinyatakan lolos jika:

- umur minimal 17 tahun
- memiliki KTP
- sudah mendaftar

Simpan hasilnya ke variabel:

```javascript
let lolos;
```

Kemudian tampilkan nilainya.

---

# 📝 Soal 14 — Challenge Mini Kasir

Sebuah toko menjual buku.

```javascript
const hargaBuku = 45000;
const jumlahBeli = 4;
const diskon = 15000;
```

Hitung:

- Subtotal
- Total bayar

Kemudian tampilkan hasilnya.

---

# 📝 Soal 15 — Challenge Akhir

Prediksi perubahan nilai variabel berikut tanpa menjalankan program.

```javascript
let x = 12;

x += 8;
x *= 2;
x--;
x /= 3;

console.log(x);
```

Tuliskan perubahan nilai `x` pada setiap langkah hingga mendapatkan hasil akhirnya.

Contoh format jawaban:

```text
Awal : 12
Setelah += 8 : ...
Setelah *= 2 : ...
Setelah -- : ...
Setelah /= 3 : ...
Hasil akhir : ...
```

---

# ⭐ Bonus Challenge

Buatlah program sederhana untuk menghitung nilai akhir seorang siswa.

Data:

```javascript
const tugas = 80;
const uts = 75;
const uas = 90;
```

Rumus:

```
Nilai Akhir = (tugas + uts + uas) / 3
```

Kemudian tentukan apakah siswa **Lulus**.

Syarat lulus:

- Nilai akhir minimal **75**

Tampilkan:

```text
Nilai Akhir : ...
Lulus       : true
```

> **Petunjuk:** Gunakan operator aritmatika dan operator perbandingan.

---

# 🚀 Bonus Challenge 2 (Kreativitas)

Buat program sederhana bertema bebas.

Program harus menggunakan minimal:

- ✅ 2 Operator Aritmatika
- ✅ 1 Operator Assignment
- ✅ 2 Operator Perbandingan
- ✅ 2 Operator Logika

Contoh tema:

- Kasir
- Penilaian siswa
- Seleksi penerimaan
- Parkir
- Rental motor
- Tiket bioskop
- Peminjaman buku
- Game
- atau tema lainnya.

Semakin kreatif dan rapi program yang dibuat, semakin baik.

---

# 📂 Struktur Folder

```
tugas-operator/
│
├── index.js
└── README.md (opsional)
```

---

# ✅ Kriteria Penilaian

| Kriteria | Poin |
|----------|------:|
| Operator Aritmatika | 20 |
| Operator Assignment | 15 |
| Operator Perbandingan | 15 |
| Operator Logika | 20 |
| Analisis & Debugging | 15 |
| Kerapihan Kode & Komentar | 15 |

**Total: 100 Poin**

---

# 💡 Tips

- Gunakan `const` jika nilai tidak berubah.
- Gunakan `let` jika nilai akan berubah.
- Kerjakan setiap soal secara berurutan.
- Jangan menghapus soal yang sudah selesai dikerjakan.
- Berikan komentar (`//`) pada setiap nomor soal agar kode lebih mudah dibaca.