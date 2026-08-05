# Soal Bab 9: JavaScript Function

## Tujuan

Setelah mengerjakan latihan ini, diharapkan kamu mampu:

- Membuat Function.
- Memanggil Function.
- Menggunakan Parameter dan Argumen.
- Menggunakan `return`.
- Membuat Function Expression.
- Membuat Arrow Function.

---

# Soal 1 - Function Sederhana

Buatlah sebuah function bernama `salam()`.

Ketika dipanggil, function tersebut menampilkan tulisan:

```
Selamat Belajar JavaScript!
```

Kemudian panggil function tersebut sebanyak **3 kali**.

---

# Soal 2 - Function dengan Parameter

Buat function bernama `perkenalan()` yang memiliki dua parameter:

- nama
- umur

Contoh pemanggilan:

```javascript
perkenalan("Budi", 20);
```

Output:

```
Halo, nama saya Budi.
Umur saya 20 tahun.
```

---

# Soal 3 - Function dengan Banyak Parameter

Buat function bernama `tampilkanProduk()` yang menerima tiga parameter:

- namaProduk
- harga
- stok

Contoh:

```javascript
tampilkanProduk("Mouse", 150000, 12);
```

Output:

```
Produk : Mouse
Harga  : Rp150000
Stok   : 12
```

---

# Soal 4 - Parameter Default

Buat function bernama `hitungDiskon()`.

Parameter:

- harga
- diskon (default = 10)

Rumus:

```
harga - (harga × diskon / 100)
```

Contoh:

```javascript
console.log(hitungDiskon(100000));
console.log(hitungDiskon(100000, 20));
```

---

# Soal 5 - Function Return

Buat function bernama `jumlah()`.

Function menerima dua angka.

Kemudian mengembalikan hasil penjumlahannya menggunakan `return`.

Contoh:

```javascript
let hasil = jumlah(8, 12);

console.log(hasil);
```

Output:

```
20
```

---

# Soal 6 - Return dan Variabel

Buat function bernama `luasPersegiPanjang()`.

Parameter:

- panjang
- lebar

Gunakan `return` untuk mengembalikan hasil luas.

Simpan hasilnya ke variabel lalu tampilkan.

---

# Soal 7 - Function Return String

Buat function bernama `cekKelulusan()`.

Parameter:

```javascript
nilai
```

Jika nilai lebih besar atau sama dengan **75**, kembalikan:

```
Lulus
```

Jika tidak:

```
Tidak Lulus
```

Contoh:

```javascript
console.log(cekKelulusan(80));
console.log(cekKelulusan(60));
```

---

# Soal 8 - Function Expression

Ubahlah function berikut menjadi Function Expression.

```javascript
function kali(a, b) {
    return a * b;
}
```

Kemudian panggil function tersebut.

---

# Soal 9 - Arrow Function

Ubahlah Function Expression berikut menjadi Arrow Function.

```javascript
const bagi = function(a, b){
    return a / b;
}
```

Kemudian tampilkan hasil:

```javascript
console.log(bagi(20,5));
```

---

# Soal 10 - Arrow Function Singkat

Buat Arrow Function bernama `kuadrat`.

Function menerima satu angka.

Kemudian mengembalikan hasil kuadrat angka tersebut.

Contoh:

```javascript
console.log(kuadrat(7));
```

Output:

```
49
```

---

# Soal 11 - Challenge Biodata

Buat sebuah function bernama `biodata()`.

Parameter:

- nama
- umur
- pekerjaan

Output:

```
===== BIODATA =====
Nama      : ...
Umur      : ...
Pekerjaan : ...
===================
```

---

# Soal 12 - Challenge Kalkulator

Buat empat function:

- tambah()
- kurang()
- kali()
- bagi()

Masing-masing menerima dua parameter.

Kemudian tampilkan hasil dari masing-masing function.

Contoh:

```
Tambah : 15
Kurang : 5
Kali   : 50
Bagi   : 2
```

---

# Soal 13 - Challenge Menghitung Total Belanja

Buat function berikut:

### hitungSubtotal(harga, jumlah)

Mengembalikan:

```
harga × jumlah
```

### hitungPPN(subtotal)

Mengembalikan:

```
subtotal × 11%
```

### hitungTotal(subtotal, ppn)

Mengembalikan:

```
subtotal + ppn
```

Gunakan data:

```javascript
const harga = 25000;
const jumlah = 4;
```

Tampilkan:

```
Subtotal : ...
PPN      : ...
Total    : ...
```

---

# Soal 14 - Challenge Akhir

Buat sebuah function bernama `hitungNilaiAkhir()`.

Parameter:

- tugas
- uts
- uas

Rumus:

```
(tugas + uts + uas) / 3
```

Function harus menggunakan `return`.

Kemudian:

- simpan hasilnya ke variabel `nilaiAkhir`
- tampilkan nilainya
- tampilkan juga apakah siswa **Lulus** atau **Tidak Lulus** menggunakan syarat:

```
Nilai ≥ 75
```

Contoh output:

```
Nilai Akhir : 82
Status      : Lulus
```

---

# Bonus Challenge ⭐

Buat program sederhana **Kalkulator BMI** menggunakan Function.

Data:

```javascript
let berat = 65;
let tinggi = 1.7;
```

Buat function:

```javascript
hitungBMI(berat, tinggi)
```

Rumus:

```
BMI = berat / (tinggi * tinggi)
```

Gunakan `return`, lalu tampilkan hasil BMI.

> **Bonus:** Bulatkan hasil BMI menjadi 2 angka di belakang koma menggunakan method `.toFixed(2)`.