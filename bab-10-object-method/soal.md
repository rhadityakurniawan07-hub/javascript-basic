# Soal Bab 10: Object & Object Method

## Tujuan

Setelah mengerjakan latihan ini, diharapkan kamu mampu:

- Membuat Object.
- Mengakses dan mengubah properti Object.
- Menggunakan Dot Notation dan Bracket Notation.
- Menambahkan dan menghapus properti.
- Membuat Method pada Object.
- Menggunakan `this`.
- Melakukan iterasi pada Object.

---

# Soal 1 - Membuat Object

Buatlah sebuah object bernama `mahasiswa` yang memiliki properti berikut:

- nama
- umur
- jurusan
- sudahLulus

Kemudian tampilkan seluruh object tersebut menggunakan `console.log()`.

---

# Soal 2 - Mengakses Properti

Diberikan object berikut.

```javascript
const buku = {
  judul: "Belajar JavaScript",
  penulis: "Andi",
  harga: 120000,
};
```

Tampilkan:

- Judul buku
- Harga buku

Gunakan **Dot Notation**.

Output:

```
Belajar JavaScript
120000
```

---

# Soal 3 - Mengubah dan Menambahkan Properti

Diberikan object berikut.

```javascript
const mobil = {
  merek: "Toyota",
  warna: "Putih",
};
```

Lakukan perubahan berikut.

- Ubah warna menjadi **Hitam**
- Tambahkan properti baru bernama `tahun` dengan nilai **2025**

Kemudian tampilkan object tersebut.

---

# Soal 4 - Bracket Notation

Diberikan object berikut.

```javascript
const produk = {
  nama: "Laptop",
  harga: 12000000,
  stok: 8,
};
```

Gunakan **Bracket Notation** untuk menampilkan:

- nama
- harga

---

# Soal 5 - Properti Dinamis

Diberikan object berikut.

```javascript
const siswa = {
  nama: "Budi",
  umur: 18,
  kelas: "XI RPL",
};
```

Buat variabel:

```javascript
let properti = "kelas";
```

Gunakan variabel tersebut untuk menampilkan nilai dari properti `kelas`.

---

# Soal 6 - Menghapus Properti

Diberikan object berikut.

```javascript
const akun = {
  username: "budi123",
  password: "rahasia",
  email: "budi@email.com",
};
```

Hapus properti `password`.

Kemudian tampilkan object hasil akhirnya.

---

# Soal 7 - Mengecek Properti

Diberikan object berikut.

```javascript
const motor = {
  merek: "Honda",
  tipe: "Vario",
};
```

Periksa apakah object tersebut memiliki properti:

- merek
- warna

Gunakan operator `in`.

Contoh output:

```
true
false
```

---

# Soal 8 - Method

Buat object bernama `lampu`.

Memiliki properti:

- warna

Memiliki method:

```javascript
nyalakan()
```

Ketika dipanggil akan menampilkan:

```
Lampu berwarna ... menyala.
```

Contoh:

```
Lampu berwarna Putih menyala.
```

---

# Soal 9 - Method dengan Parameter

Buat object bernama `akunBank`.

Properti:

- pemilik
- saldo

Method:

```javascript
setor(jumlah)
```

Method tersebut harus menambahkan saldo sesuai jumlah yang diberikan.

Contoh:

```
Saldo awal : 100000

akunBank.setor(50000)

Saldo sekarang : 150000
```

---

# Soal 10 - Menggunakan this

Lengkapi object berikut.

```javascript
const hewan = {
  nama: "Kucing",

  bersuara() {
    console.log("Halo, saya adalah ...");
  },
};
```

Gunakan `this` agar output menjadi:

```
Halo, saya adalah Kucing
```

---

# Soal 11 - Method Mengubah Properti

Buat object bernama `game`.

Properti:

- pemain
- nyawa

Method:

```javascript
terkenaSerangan(damage)
```

Method tersebut harus mengurangi nilai `nyawa`.

Contoh:

```
Nyawa awal : 100

game.terkenaSerangan(30)

Nyawa sekarang : 70
```

---

# Soal 12 - Iterasi Object

Diberikan object berikut.

```javascript
const laptop = {
  merek: "ASUS",
  ram: "16GB",
  storage: "512GB",
  harga: 15000000,
};
```

Gunakan `for...in` untuk menampilkan seluruh key beserta valuenya.

Contoh output:

```
merek : ASUS
ram : 16GB
storage : 512GB
harga : 15000000
```

---

# Soal 13 - Object.keys()

Gunakan object berikut.

```javascript
const smartphone = {
  merek: "Samsung",
  tipe: "S25",
  warna: "Hitam",
};
```

Tampilkan seluruh nama propertinya menggunakan:

```javascript
Object.keys()
```

---

# Soal 14 - Object.values()

Masih menggunakan object sebelumnya.

Tampilkan seluruh nilainya menggunakan:

```javascript
Object.values()
```

---

# Soal 15 - Object.entries()

Masih menggunakan object sebelumnya.

Tampilkan seluruh pasangan key dan value menggunakan:

```javascript
Object.entries()
```

---

# Challenge 1 - Biodata

Buat object bernama `biodata`.

Memiliki properti:

- nama
- umur
- pekerjaan
- kota

Tambahkan method:

```javascript
tampilkanBiodata()
```

Output:

```
===== BIODATA =====
Nama      : ...
Umur      : ...
Pekerjaan : ...
Kota      : ...
===================
```

---

# Challenge 2 - Sistem Inventaris

Buat object bernama `produk`.

Properti:

- nama
- harga
- stok

Method:

- tambahStok(jumlah)
- kurangiStok(jumlah)
- tampilkanInfo()

Contoh penggunaan:

```javascript
produk.tampilkanInfo();

produk.tambahStok(10);
produk.kurangiStok(3);

produk.tampilkanInfo();
```

---

# Challenge 3 - Simulasi Rekening Bank

Buat object bernama `rekening`.

Properti:

- pemilik
- saldo

Method:

- setor(jumlah)
- tarik(jumlah)
- cekSaldo()

Aturan:

- `setor()` menambah saldo.
- `tarik()` mengurangi saldo.
- Jika saldo tidak mencukupi, tampilkan:

```
Saldo tidak mencukupi.
```

Gunakan `this` pada seluruh method.

Contoh output:

```
Saldo : Rp1000000

Setor Rp500000

Saldo : Rp1500000

Tarik Rp200000

Saldo : Rp1300000
```

---

# Bonus Challenge ⭐

Buat object bernama `playlist`.

Properti:

- namaPlaylist
- lagu (berupa array)

Method:

- tambahLagu(judul)
- hapusLagu(index)
- tampilkanPlaylist()

Contoh penggunaan:

```javascript
playlist.tambahLagu("Hymn for the Weekend");
playlist.tambahLagu("Numb");

playlist.tampilkanPlaylist();
```

Output:

```
=== PLAYLIST ===
1. Hymn for the Weekend
2. Numb
```

> **Bonus:** Gunakan method array seperti `push()` dan `splice()` di dalam object method.