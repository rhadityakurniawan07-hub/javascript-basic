# Soal Bab 6: Percabangan (Control Flow)

## Tujuan

Setelah mengerjakan latihan ini, diharapkan kamu mampu:

- Menggunakan `if`.
- Menggunakan `if...else`.
- Menggunakan `if...else if...else`.
- Menggunakan `switch`.
- Memahami Truthy dan Falsy.
- Menyusun logika percabangan sederhana.

---

# Soal 1 - Lulus atau Tidak

Diketahui:

```javascript
let nilai = 80;
```

Jika nilai minimal **75**, tampilkan:

```
Lulus
```

Jika tidak:

```
Tidak Lulus
```

Gunakan `if`.

---

# Soal 2 - Login

Diketahui:

```javascript
let sudahLogin = false;
```

Jika pengguna sudah login tampilkan:

```
Selamat Datang
```

Jika belum login tampilkan:

```
Silakan Login Terlebih Dahulu
```

Gunakan `if...else`.

---

# Soal 3 - Predikat Nilai

Diketahui:

```javascript
let nilai = 87;
```

Tentukan predikat berikut.

| Nilai | Predikat |
|-------|----------|
| >=90 | A |
| >=80 | B |
| >=70 | C |
| >=60 | D |
| selain itu | E |

Gunakan `if...else if...else`.

Output:

```
Predikat : B
```

---

# Soal 4 - Hari

Diketahui:

```javascript
let hari = 5;
```

Gunakan `switch` untuk menampilkan nama hari.

```
1 = Senin
2 = Selasa
3 = Rabu
4 = Kamis
5 = Jumat
6 = Sabtu
7 = Minggu
```

---

# Soal 5 - Menu Minuman

Diketahui:

```javascript
let menu = "teh";
```

Gunakan `switch`.

Jika:

```
kopi
```

tampilkan

```
Harga : 15000
```

Jika:

```
teh
```

tampilkan

```
Harga : 10000
```

Jika:

```
jus
```

tampilkan

```
Harga : 18000
```

Selain itu tampilkan:

```
Menu tidak tersedia
```

---

# Soal 6 - Truthy atau Falsy

Prediksi output berikut tanpa menjalankan program.

```javascript
if ("") {
    console.log("A");
} else {
    console.log("B");
}
```

Tuliskan alasanmu.

---

# Soal 7 - Truthy atau Falsy

Prediksi output berikut.

```javascript
if (100) {
    console.log("Aktif");
}
```

Mengapa program tersebut tetap masuk ke dalam `if`?

---

# Soal 8 - Validasi Username

Diketahui:

```javascript
let username = "";
```

Jika username kosong tampilkan:

```
Username wajib diisi
```

Jika tidak kosong tampilkan:

```
Selamat datang
```

Gunakan konsep Truthy/Falsy.

---

# Soal 9 - Validasi Login

Diketahui:

```javascript
let username = "budi";
let password = "";
```

Jika salah satu kosong tampilkan:

```
Data belum lengkap
```

Jika keduanya terisi tampilkan:

```
Login berhasil
```

---

# Soal 10 - Lampu Lalu Lintas

Diketahui:

```javascript
let warna = "merah";
```

Buat program menggunakan `if...else if`.

Output:

```
Merah  -> Berhenti
Kuning -> Bersiap
Hijau  -> Jalan
```

---

# Soal 11 - Bulan

Diketahui:

```javascript
let bulan = 2;
```

Gunakan `switch` untuk menampilkan nama bulan.

```
1 Januari
2 Februari
3 Maret
...
12 Desember
```

Jika angka di luar 1–12 tampilkan:

```
Bulan tidak valid
```

---

# Soal 12 - Challenge Diskon

Sebuah toko memiliki aturan berikut.

```
Belanja >= 500000 -> Diskon 20%
Belanja >= 250000 -> Diskon 10%
Selain itu -> Tidak ada diskon
```

Diketahui:

```javascript
let totalBelanja = 320000;
```

Hitung:

- Persentase diskon
- Jumlah diskon
- Total yang harus dibayar

Contoh output:

```
Diskon : 10%
Potongan : 32000
Total Bayar : 288000
```

---

# Soal 13 - Challenge Nilai Akhir

Diketahui:

```javascript
let nilai = 76;
```

Tentukan keterangan berikut.

```
>=90 Sangat Baik
>=75 Baik
>=60 Cukup
<60 Perlu Belajar Lagi
```

Gunakan `if...else if`.

---

# Soal 14 - Challenge Mesin ATM

Diketahui:

```javascript
let saldo = 150000;
let tarikTunai = 100000;
```

Jika saldo mencukupi tampilkan:

```
Penarikan berhasil
Sisa saldo : ...
```

Jika saldo tidak cukup tampilkan:

```
Saldo tidak mencukupi
```

---

# Soal 15 - Challenge Login Admin

Diketahui:

```javascript
let username = "admin";
let password = "12345";
```

Aturan:

- Username harus `"admin"`
- Password harus `"12345"`

Jika keduanya benar tampilkan:

```
Login Berhasil
```

Jika salah satu salah tampilkan:

```
Username atau Password Salah
```

---

# Bonus Challenge

Buat program sederhana untuk menentukan kategori umur.

Diketahui:

```javascript
let umur = 18;
```

Aturan:

```
0 - 5      Balita
6 - 12     Anak-anak
13 - 17    Remaja
18 - 59    Dewasa
60 ke atas Lansia
```

Gunakan `if...else if`.

Contoh output:

```
Kategori : Dewasa
```

> **Tips:** Kerjakan setiap soal secara berurutan. Hindari langsung melihat jawaban teman. Fokuslah memahami logika percabangan, karena materi ini akan menjadi dasar untuk perulangan (`loop`), fungsi (`function`), dan berbagai logika program yang lebih kompleks.