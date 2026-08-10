# Soal Bab 12: String & Number Built-in Function

## 🎯 Tujuan

Setelah mengerjakan latihan ini, kamu diharapkan mampu:

* Menggunakan String method untuk mengolah teks.
* Membersihkan input menggunakan `.trim()`.
* Mengubah huruf menggunakan `.toUpperCase()` dan `.toLowerCase()`.
* Mencari teks menggunakan `.includes()`, `.indexOf()`, `.startsWith()`, dan `.endsWith()`.
* Memotong teks menggunakan `.slice()` atau `.substring()`.
* Mengganti teks menggunakan `.replace()` dan `.replaceAll()`.
* Memecah String menjadi Array menggunakan `.split()`.
* Menggunakan `.length` untuk mengetahui panjang String.
* Memformat angka menggunakan `.toFixed()`.
* Mengubah String menjadi Number menggunakan `parseInt()`, `parseFloat()`, dan `Number()`.

---

# Soal 1 - Ubah Casing

Diberikan:

```javascript
const nama = "budi santoso";
```

Tampilkan nama dalam huruf kapital.

Output:

```text
BUDI SANTOSO
```

Kemudian tampilkan kembali dalam huruf kecil.

Output:

```text
budi santoso
```

---

# Soal 2 - Bersihkan Input

Diberikan input:

```javascript
const email = "   Budi@Email.COM   ";
```

Bersihkan input tersebut sehingga menghasilkan:

```text
Budi@Email.COM
```

Kemudian ubah menjadi huruf kecil.

Output akhir:

```text
budi@email.com
```

> Gunakan `.trim()` dan `.toLowerCase()`.

---

# Soal 3 - Validasi Username

Diberikan:

```javascript
const username = "santri_jago_ngoding";
```

Buat program yang memeriksa apakah username memiliki panjang minimal 8 karakter.

Jika memenuhi:

```text
Username valid
```

Jika tidak:

```text
Username terlalu pendek
```

---

# Soal 4 - Mencari Kata

Diberikan:

```javascript
const pesan = "Selamat datang di kelas JavaScript!";
```

Periksa apakah pesan tersebut mengandung kata:

```text
JavaScript
```

Jika ada:

```text
Pesan membahas JavaScript
```

Jika tidak:

```text
Pesan tidak membahas JavaScript
```

---

# Soal 5 - Mencari Posisi Kata

Diberikan:

```javascript
const kalimat = "Saya sedang belajar JavaScript";
```

Cari posisi pertama kata:

```text
JavaScript
```

Gunakan `.indexOf()`.

Tampilkan:

```text
Posisi JavaScript: ...
```

---

# Soal 6 - Validasi URL

Diberikan:

```javascript
const url = "https://santri.dev";
```

Periksa:

1. Apakah URL dimulai dengan `https`?
2. Apakah URL diakhiri dengan `.dev`?

Output:

```text
Menggunakan HTTPS: true
Domain .dev: true
```

---

# Soal 7 - Ekstrak Username dari Email

Diberikan:

```javascript
const email = "budi.santoso@gmail.com";
```

Gunakan String method untuk menghasilkan:

```text
Username: budi.santoso
```

> Gunakan `.slice()` atau kombinasi method String yang sudah dipelajari.

---

# Soal 8 - Mengganti Kata

Diberikan:

```javascript
const pesan = "Saya suka belajar PHP";
```

Ubah kata:

```text
PHP
```

menjadi:

```text
JavaScript
```

Output:

```text
Saya suka belajar JavaScript
```

---

# Soal 9 - Replace vs ReplaceAll

Diberikan:

```javascript
const kalimat = "JavaScript itu seru. Saya suka JavaScript.";
```

### A.

Gunakan `.replace()` untuk mengganti kata `JavaScript` menjadi `TypeScript`.

### B.

Gunakan `.replaceAll()` untuk mengganti seluruh kata `JavaScript` menjadi `TypeScript`.

Perhatikan perbedaan hasilnya.

---

# Soal 10 - Memecah Data

Diberikan:

```javascript
const data = "Budi,Ani,Doni,Siti";
```

Gunakan `.split()` untuk mengubah String tersebut menjadi Array.

Hasil yang diharapkan:

```javascript
["Budi", "Ani", "Doni", "Siti"]
```

Kemudian gunakan `for...of` untuk menampilkan:

```text
Budi
Ani
Doni
Siti
```

---

# Soal 11 - Konversi Nilai

Diberikan:

```javascript
const nilai1 = "85";
const nilai2 = "90";
```

Jika langsung dilakukan:

```javascript
console.log(nilai1 + nilai2);
```

Apa hasilnya?

Kemudian ubah kedua String tersebut menjadi Number dan hitung jumlahnya.

Output:

```text
Total nilai: 175
```

---

# Soal 12 - parseInt vs parseFloat

Prediksi output program berikut tanpa menjalankannya:

```javascript
console.log(parseInt("25.75"));
console.log(parseFloat("25.75"));
```

Kemudian jelaskan perbedaan hasil keduanya.

---

# Soal 13 - Number vs parseInt

Prediksi hasil:

```javascript
console.log(Number("42px"));
console.log(parseInt("42px"));
```

Jelaskan mengapa hasilnya berbeda.

---

# 💼 Study Case 1 - Sistem Login

Sebuah aplikasi menerima username dari pengguna.

Input pengguna:

```javascript
const username = "   BUDI123   ";
```

Program harus:

1. Menghapus spasi di awal dan akhir.
2. Mengubah username menjadi huruf kecil.
3. Memeriksa apakah username memiliki minimal 5 karakter.
4. Menampilkan username yang sudah dibersihkan.

Contoh output:

```text
Username: budi123
Username valid
```

### Tantangan

Bagaimana jika user memasukkan:

```javascript
const username = "   AB   ";
```

Output:

```text
Username: ab
Username terlalu pendek
```

---


# 💼 Study Case 2 - Sistem Struk Belanja

Sebuah toko menerima harga dalam bentuk String:

```javascript
const hargaBarang = "125000.50";
const jumlah = "3";
```

Program harus:

1. Mengubah harga menjadi Number.
2. Mengubah jumlah menjadi Number.
3. Menghitung subtotal.
4. Menampilkan subtotal dengan 2 angka di belakang koma.

Output:

```text
Harga   : Rp125000.50
Jumlah  : 3
Subtotal: Rp375001.50
```

Gunakan:

```javascript
parseFloat()
Number()
toFixed()
```

---

# ⭐ FINAL - Sistem Pemrosesan Data Produk

Buat program yang menerima data produk:

```javascript
const namaProduk = "   keyboard mechanical   ";
const hargaProduk = "750000.50";
const kodeProduk = "PROD-2026-001";
```

Program harus menghasilkan:

```text
===== DATA PRODUK =====

Nama  : Keyboard Mechanical
Harga : Rp750000.50
Kode  : PROD-2026-001

=======================
```

Kemudian lakukan validasi:

1. Nama produk tidak boleh kosong.
2. Harga harus berupa Number.
3. Kode produk harus diawali dengan `PROD`.
4. Kode produk harus diakhiri dengan angka `001`.

Gunakan berbagai method yang sudah dipelajari pada Bab 12.

---


# 🧠 Pertanyaan Refleksi

Setelah menyelesaikan soal, jawab:

1. Mengapa input dari pengguna biasanya perlu dibersihkan menggunakan `.trim()`?
2. Apa perbedaan `.replace()` dan `.replaceAll()`?
3. Apa perbedaan `parseInt()` dan `parseFloat()`?
4. Kapan `Number()` lebih cocok digunakan?
5. Mengapa `.toFixed()` menghasilkan String?
6. Mengapa `.toLowerCase()` berguna ketika membuat fitur pencarian?
7. Menurutmu, method mana yang paling sering digunakan dalam aplikasi nyata? Jelaskan alasannya.

```

Untuk evaluasi mingguan, saya paling merekomendasikan **Final Challenge CLI Data Produk** sebagai tugas utama. Study case sebelumnya bisa dikerjakan bersama di kelas, sedangkan final challenge dikerjakan mandiri. Dengan begitu mereka tidak cuma mengerjakan 15 soal syntax, tetapi benar-benar menggabungkan materi menjadi satu program kecil. 🚀
```
