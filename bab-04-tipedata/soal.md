# 📝 Tugas Bab 4 — Tipe Data JavaScript

## 🎯 Tujuan

Pada tugas ini kamu akan berlatih:

- Membuat berbagai tipe data di JavaScript.
- Membedakan tipe data primitif dan non-primitif.
- Menggunakan `typeof`.
- Mengakses data Array dan Object.

---

# 📋 Aturan

- Kerjakan menggunakan JavaScript ES6.
- Simpan seluruh kode pada file `script.js`.
- Jalankan menggunakan **Node.js** atau Browser Console.
- Berikan komentar yang rapi pada setiap bagian kode.

---

# 🚀 Soal

Buat sebuah file bernama

```
script.js
```

Kemudian kerjakan langkah-langkah berikut.

---

## Soal 1 — Data Diri

Buat beberapa variabel berikut.

| Variabel | Tipe Data |
|----------|-----------|
| nama | String |
| umur | Number |
| sudahLulus | Boolean |
| alamat | Null |
| nomorTelepon | Undefined |

Setelah itu tampilkan seluruh data menggunakan

```javascript
console.log();
```

---

## Soal 2 — Daftar Hobi

Buat sebuah **Array** yang berisi minimal 5 hobi.

Contoh:

```javascript
const hobi = [
    "Membaca",
    "Ngoding",
    "Gaming",
    "Olahraga",
    "Memasak"
];
```

Kemudian tampilkan

- hobi pertama
- hobi ketiga
- hobi terakhir

menggunakan indeks array.

---

## Soal 3 — Object Profil

Buat sebuah Object bernama

```javascript
profil
```

yang memiliki data berikut

- nama
- umur
- sekolah
- jurusan
- aktif

Contoh struktur

```javascript
const profil = {
    ...
};
```

Kemudian tampilkan

```
Nama :
Umur :
Sekolah :
Jurusan :
Status :
```

menggunakan notasi titik (`.`).

---

## Soal 4 — Cek Tipe Data

Gunakan operator

```javascript
typeof
```

untuk mengecek tipe data dari semua data berikut.

- nama
- umur
- sudahLulus
- alamat
- nomorTelepon
- hobi
- profil

Contoh output

```
string
number
boolean
object
undefined
object
object
```

---

## Soal 5 — Tebak Tipe Data

Sebelum menjalankan kode berikut, tuliskan terlebih dahulu menurutmu apa hasil dari `typeof`.

```javascript
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof undefined);
```

Kemudian jalankan program dan tuliskan apakah tebakanmu benar.

---

## Soal 6 — Analisis Program

Perhatikan kode berikut.

```javascript
const tahun = "2026";
const umur = 17;
const aktif = true;

console.log(typeof tahun);
console.log(typeof umur);
console.log(typeof aktif);

console.log(tahun + 1);
console.log(umur + 1);
```

Jawablah pertanyaan berikut.

1. Apa tipe data variabel `tahun`?
2. Mengapa hasil `tahun + 1` bukan menjadi `2027`?
3. Apa tipe data variabel `umur`?
4. Berapa hasil `umur + 1`?
5. Apa fungsi operator `typeof`?

---

# ⭐ Bonus

Buat sebuah Object bernama

```javascript
kelas
```

yang memiliki data berikut.

- namaKelas
- jumlahSiswa
- ketuaKelas
- daftarMapel (Array minimal 4 mata pelajaran)

Kemudian tampilkan.

```
Nama Kelas :
Jumlah Siswa :
Ketua Kelas :
Mapel Pertama :
Mapel Terakhir :
```

---

# 📦 Struktur Folder

```
tugas-bab-4/
│
├── script.js
└── README.md (opsional)
```

---

# ✅ Kriteria Penilaian

| Aspek | Bobot |
|-------|-------|
| Penggunaan tipe data yang benar | 30% |
| Penggunaan Array | 15% |
| Penggunaan Object | 20% |
| Penggunaan `typeof` | 20% |
| Kerapihan kode & komentar | 15% |

---

## 📤 Pengumpulan

1. Fork repository yang telah diberikan.
2. Kerjakan pada repository milikmu.
3. Commit hasil pekerjaan.
4. Push ke GitHub.
5. Kirim link repository kepada pengajar.