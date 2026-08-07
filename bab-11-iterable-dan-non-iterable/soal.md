# Soal Bab 11: Iterable & Non-Iterable

## Tujuan

Setelah mengerjakan latihan ini, diharapkan kamu mampu:

- Membedakan tipe data Iterable dan Non-Iterable.
- Menggunakan `for...of` untuk Array dan String.
- Menggunakan `for...in` untuk Object.
- Menentukan jenis perulangan yang tepat sesuai tipe datanya.

---

# Soal 1 - Iterable atau Non-Iterable

Tentukan apakah tipe data berikut termasuk **Iterable** atau **Non-Iterable**.

1. `"Indonesia"`
2. `["Merah", "Putih"]`
3. `150`
4. `true`
5. `{ nama: "Budi" }`

Tuliskan jawabanmu beserta alasannya.

---

# Soal 2 - for...of pada String

Buat program berikut.

```javascript
const kata = "PROGRAM";
```

Gunakan `for...of` untuk menampilkan setiap huruf.

Output:

```
P
R
O
G
R
A
M
```

---

# Soal 3 - for...of pada Array

Diberikan array berikut.

```javascript
const buah = [
  "Apel",
  "Jeruk",
  "Mangga",
  "Pisang",
];
```

Gunakan `for...of` untuk menampilkan:

```
Saya suka Apel
Saya suka Jeruk
Saya suka Mangga
Saya suka Pisang
```

---

# Soal 4 - Menghitung Total Nilai

Diberikan data berikut.

```javascript
const nilai = [90, 80, 85, 100, 95];
```

Gunakan `for...of` untuk menghitung total seluruh nilai.

Output:

```
Total Nilai : ...
```

---

# Soal 5 - Menghitung Rata-rata

Masih menggunakan data berikut.

```javascript
const nilai = [90, 80, 85, 100, 95];
```

Hitung rata-ratanya menggunakan `for...of`.

Output:

```
Rata-rata : ...
```

---

# Soal 6 - Menggunakan for...in

Diberikan object berikut.

```javascript
const siswa = {
  nama: "Budi",
  umur: 17,
  kelas: "XI RPL",
};
```

Gunakan `for...in` untuk menampilkan seluruh data.

Output:

```
nama : Budi
umur : 17
kelas : XI RPL
```

---

# Soal 7 - Menampilkan Key Object

Diberikan object berikut.

```javascript
const laptop = {
  merek: "ASUS",
  ram: "16GB",
  storage: "512GB",
};
```

Gunakan `for...in` untuk menampilkan **nama propertinya saja**.

Output:

```
merek
ram
storage
```

---

# Soal 8 - Menampilkan Value Object

Masih menggunakan object sebelumnya.

Gunakan `for...in` untuk menampilkan **nilai** dari setiap properti.

Output:

```
ASUS
16GB
512GB
```

---

# Soal 9 - Memilih Perulangan yang Tepat

Tentukan perulangan yang paling tepat untuk data berikut.

| Data | Gunakan |
|------|---------|
| Array | ? |
| String | ? |
| Object | ? |

Jelaskan alasanmu.

---

# Soal 10 - Prediksi Output

Apa output dari program berikut?

```javascript
const angka = [10, 20, 30];

for (let item of angka) {
  console.log(item);
}
```

---

# Soal 11 - Prediksi Output

Apa output dari program berikut?

```javascript
const angka = [10, 20, 30];

for (let item in angka) {
  console.log(item);
}
```

Jelaskan mengapa hasilnya berbeda dengan soal sebelumnya.

---

# Soal 12 - Prediksi Output

Apa output dari program berikut?

```javascript
const nama = "BUDI";

for (let huruf of nama) {
  console.log(huruf);
}
```

---

# Soal 13 - Challenge Biodata

Diberikan object berikut.

```javascript
const biodata = {
  nama: "Andi",
  umur: 20,
  pekerjaan: "Programmer",
  kota: "Yogyakarta",
};
```

Gunakan `for...in` untuk mencetak seluruh isi object dengan format berikut.

```
===== BIODATA =====
nama : Andi
umur : 20
pekerjaan : Programmer
kota : Yogyakarta
===================
```

---

# Soal 14 - Challenge Daftar Belanja

Diberikan array berikut.

```javascript
const daftarBelanja = [
  "Beras",
  "Minyak",
  "Gula",
  "Telur",
  "Sabun",
];
```

Gunakan `for...of` untuk menampilkan daftar belanja dengan nomor urut.

Contoh output:

```
1. Beras
2. Minyak
3. Gula
4. Telur
5. Sabun
```

> **Petunjuk:** Gunakan variabel tambahan untuk menyimpan nomor urut.

---

# Soal 15 - Challenge Nilai Tertinggi

Diberikan array berikut.

```javascript
const nilai = [75, 90, 88, 100, 67, 95];
```

Gunakan `for...of` untuk mencari nilai terbesar.

Output:

```
Nilai tertinggi : 100
```

---

# Bonus Challenge ⭐

Buat sebuah object bernama `kelas`.

```javascript
const kelas = {
  nama: "JavaScript Dasar",
  mentor: "Pak Budi",
  jumlahSiswa: 20,
};
```

Kemudian:

1. Gunakan `for...in` untuk menampilkan seluruh data kelas.
2. Tambahkan properti baru bernama `ruangan` dengan nilai `"Lab Komputer"`.
3. Tampilkan kembali seluruh isi object menggunakan `for...in`.

Output contoh:

```
nama : JavaScript Dasar
mentor : Pak Budi
jumlahSiswa : 20
ruangan : Lab Komputer
```