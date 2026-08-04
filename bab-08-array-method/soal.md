# Soal Bab 8: Array & Array Method

## Tujuan

Setelah mengerjakan latihan ini, diharapkan kamu mampu:

- Membuat dan mengakses Array.
- Mengubah isi Array menggunakan indeks.
- Menggunakan `.length`.
- Menggunakan method `push()`, `pop()`, `shift()`, dan `unshift()`.
- Menggunakan `indexOf()` dan `includes()`.
- Menggunakan `splice()` dan `slice()`.
- Menggabungkan Array dengan perulangan sederhana.

---

# Soal 1 - Membuat Array

Buat sebuah array bernama `buah` yang berisi:

- Apel
- Jeruk
- Mangga
- Anggur

Kemudian tampilkan seluruh isi array menggunakan `console.log()`.

---

# Soal 2 - Mengakses Elemen

Gunakan array berikut.

```javascript
let hewan = ["Kucing", "Anjing", "Kelinci", "Burung"];
```

Tampilkan:

- elemen pertama
- elemen ketiga
- elemen terakhir

Output:

```
Kucing
Kelinci
Burung
```

---

# Soal 3 - Mengubah Isi Array

Diketahui:

```javascript
let warna = ["Merah", "Hijau", "Biru"];
```

Ubah warna **Hijau** menjadi **Kuning**.

Kemudian tampilkan isi array.

Output:

```
["Merah", "Kuning", "Biru"]
```

---

# Soal 4 - Menggunakan length

Diketahui:

```javascript
let siswa = [
  "Andi",
  "Budi",
  "Citra",
  "Dewi",
  "Eka",
];
```

Tampilkan jumlah seluruh siswa menggunakan properti `.length`.

Output:

```
Jumlah siswa = 5
```

---

# Soal 5 - push()

Diketahui:

```javascript
let menu = ["Nasi Goreng", "Mie Ayam"];
```

Tambahkan menu berikut ke akhir array:

- Bakso
- Soto

Kemudian tampilkan isi array.

---

# Soal 6 - pop()

Diketahui:

```javascript
let kendaraan = [
  "Mobil",
  "Motor",
  "Sepeda",
];
```

Hapus elemen terakhir menggunakan `.pop()`.

Tampilkan:

- data yang dihapus
- isi array terbaru

---

# Soal 7 - shift() dan unshift()

Diketahui:

```javascript
let antrian = [
  "Budi",
  "Ani",
  "Joko",
];
```

Lakukan langkah berikut:

- Layani orang pertama.
- Tambahkan **Dewi** sebagai prioritas di depan antrian.

Tampilkan isi array akhirnya.

---

# Soal 8 - indexOf()

Diketahui:

```javascript
let kota = [
  "Jakarta",
  "Bandung",
  "Yogyakarta",
  "Surabaya",
];
```

Cari posisi dari:

- Bandung
- Surabaya
- Bali

Tampilkan hasilnya.

---

# Soal 9 - includes()

Diketahui:

```javascript
let role = [
  "admin",
  "editor",
  "viewer",
];
```

Periksa apakah:

- editor ada
- owner ada

Tampilkan hasilnya.

---

# Soal 10 - splice()

Diketahui:

```javascript
let buah = [
  "Apel",
  "Jeruk",
  "Mangga",
  "Anggur",
];
```

Lakukan:

- hapus "Jeruk"
- sisipkan "Semangka" pada posisi tersebut

Tampilkan isi array akhirnya.

---

# Soal 11 - slice()

Diketahui:

```javascript
let angka = [
  10,
  20,
  30,
  40,
  50,
  60,
];
```

Ambil:

- tiga angka pertama
- tiga angka terakhir

Gunakan `slice()`.

---

# Soal 12 - Menampilkan Seluruh Isi Array

Diketahui:

```javascript
let makanan = [
  "Bakso",
  "Sate",
  "Soto",
  "Rawon",
];
```

Gunakan perulangan `for` untuk menampilkan seluruh isi array.

Contoh output:

```
1. Bakso
2. Sate
3. Soto
4. Rawon
```

---

# Soal 13 - Challenge Daftar Belanja

Buat array:

```javascript
let belanja = [];
```

Kemudian lakukan langkah berikut:

- tambahkan Beras
- tambahkan Minyak
- tambahkan Gula
- hapus item terakhir
- tambahkan Telur
- tambahkan Tepung di paling depan

Tampilkan:

- isi array
- jumlah barang

---

# Soal 14 - Challenge Sistem Antrian

Buat program sederhana menggunakan array.

Kondisi awal:

```javascript
let antrian = [];
```

Lakukan proses berikut:

1. Budi datang.
2. Ani datang.
3. Citra datang.
4. Layani orang pertama.
5. Dedi datang.
6. Eka masuk sebagai prioritas.

Tampilkan:

```
Daftar Antrian

1. Eka
2. Ani
3. Citra
4. Dedi
```

Gunakan kombinasi:

- `push()`
- `shift()`
- `unshift()`

---

# Soal 15 - Challenge Inventaris

Buat array:

```javascript
let inventaris = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
];
```

Lakukan operasi berikut:

- cari posisi Keyboard
- cek apakah Printer ada
- ganti Mouse menjadi Headset
- ambil dua barang terakhir menggunakan `slice()`

Kemudian tampilkan:

- inventaris terbaru
- posisi Keyboard
- hasil pengecekan Printer
- dua barang terakhir

---

# Bonus Challenge - Mini Playlist Musik

Buat program sederhana untuk mengelola playlist lagu.

Awalnya:

```javascript
let playlist = [];
```

Lakukan langkah berikut:

- tambahkan 5 lagu
- hapus lagu terakhir
- tambahkan lagu baru di awal
- tampilkan seluruh playlist menggunakan perulangan `for`
- tampilkan jumlah lagu

Contoh output:

```
=== Playlist Saya ===

1. Lagu A
2. Lagu B
3. Lagu C
4. Lagu D
5. Lagu E

Total Lagu : 5
```

> **Petunjuk:** Gunakan kombinasi `push()`, `pop()`, `unshift()`, `.length`, dan `for`.