# Evaluasi Mingguan
# Project: CLI Todo List

## 🎯 Deskripsi

Buatlah sebuah aplikasi **Todo List berbasis CLI (Command Line Interface)** menggunakan JavaScript.

Aplikasi digunakan untuk membantu pengguna mencatat dan mengelola daftar tugas.

Contoh penggunaan:

```text
==============================
       TODO LIST APP
==============================

1. Tambah Todo
2. Lihat Todo
3. Selesaikan Todo
4. Hapus Todo
5. Cari Todo
6. Keluar

Pilih menu: 
```

---

# 📚 Materi yang Digunakan

Project ini wajib menggunakan konsep yang sudah dipelajari:

- Variable
- Tipe Data
- Operator
- Array
- Object
- Function
- Object Method
- `this`
- `for...of`
- `for...in`

---

# 📝 Ketentuan Data

Setiap Todo harus berbentuk **Object**.

Contoh:

```javascript
{
  id: 1,
  judul: "Belajar JavaScript",
  selesai: false
}
```

Semua Todo disimpan di dalam sebuah **Array**.

Contoh:

```javascript
const todos = [
  {
    id: 1,
    judul: "Belajar JavaScript",
    selesai: false
  },
  {
    id: 2,
    judul: "Mengerjakan tugas",
    selesai: true
  }
];
```

---

# 🚀 Fitur Wajib

## 1. Tambah Todo

User dapat menambahkan Todo baru.

Contoh:

```text
Pilih menu: 1

Masukkan Todo: Belajar Function

Todo berhasil ditambahkan!
```

Todo baru harus memiliki:

- `id`
- `judul`
- `selesai`

Status awal:

```javascript
selesai: false
```

---

## 2. Lihat Todo

User dapat melihat seluruh Todo.

Contoh:

```text
========== TODO ==========
1. Belajar JavaScript [Belum selesai]
2. Mengerjakan tugas [Selesai]
3. Membaca dokumentasi [Belum selesai]
==========================
```

Gunakan:

```javascript
for...of
```

untuk menampilkan Todo.

---

## 3. Selesaikan Todo

User dapat memilih Todo berdasarkan `id`.

Contoh:

```text
Pilih menu: 3

Masukkan ID Todo: 1

Todo berhasil diselesaikan!
```

Data berubah menjadi:

```javascript
{
  id: 1,
  judul: "Belajar JavaScript",
  selesai: true
}
```

---

## 4. Hapus Todo

User dapat menghapus Todo berdasarkan `id`.

Contoh:

```text
Pilih menu: 4

Masukkan ID Todo: 2

Todo berhasil dihapus!
```

Gunakan method Array yang sudah dipelajari untuk menghapus data.

---

## 5. Cari Todo

User dapat mencari Todo berdasarkan judul.

Contoh:

```text
Pilih menu: 5

Masukkan kata kunci: javascript

Hasil pencarian:

1. Belajar JavaScript
2. Membuat Project JavaScript
```

Pencarian harus tetap menemukan Todo meskipun pengguna menulis huruf besar atau kecil.

Contoh:

```text
javascript
JavaScript
JAVASCRIPT
```

tetap dianggap sama.

---

## 6. Keluar

Jika user memilih:

```text
6
```

program berhenti dan menampilkan:

```text
Terima kasih telah menggunakan Todo List!
```

---

# 🧩 Ketentuan Function

Program **wajib menggunakan function**.

Minimal buat function berikut:

```javascript
tampilkanMenu()
tambahTodo()
lihatTodo()
selesaikanTodo()
hapusTodo()
cariTodo()
```

Kamu boleh menambahkan function lain jika diperlukan.

---

# 🧩 Ketentuan Object Method

Selain function biasa, buatlah minimal **satu Object Method**.

Contoh konsep:

```javascript
const todoManager = {
  todos: [],

  tambah() {
    // ...
  },

  tampilkan() {
    // ...
  }
};
```

Gunakan:

```javascript
this
```

untuk mengakses data `todos` di dalam Object Method.

---

# 🔄 Ketentuan Iterable

Gunakan:

```javascript
for...of
```

minimal satu kali untuk mengiterasi daftar Todo.

Contoh:

```javascript
for (let todo of todos) {
  console.log(todo.judul);
}
```

Gunakan:

```javascript
for...in
```

minimal satu kali untuk mengiterasi properti sebuah Todo.

Contoh:

```javascript
for (let key in todo) {
  console.log(key, todo[key]);
}
```

---

# 💡 Contoh Alur Program

```text
==============================
       TODO LIST APP
==============================

1. Tambah Todo
2. Lihat Todo
3. Selesaikan Todo
4. Hapus Todo
5. Cari Todo
6. Keluar

Pilih menu: 1

Masukkan Todo: Belajar Object

Todo berhasil ditambahkan!

==============================
       TODO LIST APP
==============================

1. Tambah Todo
2. Lihat Todo
3. Selesaikan Todo
4. Hapus Todo
5. Cari Todo
6. Keluar

Pilih menu: 2

========== TODO ==========
1. Belajar Object [Belum selesai]
==========================

Pilih menu: 3

Masukkan ID Todo: 1

Todo berhasil diselesaikan!

Pilih menu: 2

========== TODO ==========
1. Belajar Object [Selesai]
==========================

Pilih menu: 6

Terima kasih telah menggunakan Todo List!
```

---

# ⭐ Bonus

Tambahkan fitur berikut jika ingin mendapatkan nilai tambahan.

## Bonus 1 - Prioritas

Setiap Todo memiliki:

```javascript
prioritas
```

Contoh:

```javascript
{
  id: 1,
  judul: "Belajar JavaScript",
  selesai: false,
  prioritas: "tinggi"
}
```

Pilihan:

```text
tinggi
sedang
rendah
```

---

## Bonus 2 - Deadline

Tambahkan properti:

```javascript
deadline
```

Contoh:

```javascript
{
  id: 1,
  judul: "Belajar JavaScript",
  selesai: false,
  deadline: "10-08-2026"
}
```

---

## Bonus 3 - Filter Todo

Tambahkan menu:

```text
7. Lihat Todo Belum Selesai
8. Lihat Todo Selesai
```

---

# 📊 Kriteria Penilaian

| Komponen | Nilai |
|---|---:|
| Program dapat dijalankan | 10 |
| Menambah Todo | 15 |
| Menampilkan Todo | 15 |
| Menyelesaikan Todo | 10 |
| Menghapus Todo | 10 |
| Mencari Todo | 10 |
| Penggunaan Function | 10 |
| Penggunaan Object & Method | 10 |
| Penggunaan `for...of` / `for...in` | 5 |
| Kerapian kode | 5 |
| **Total** | **100** |

### Bonus

| Bonus | Nilai |
|---|---:|
| Prioritas Todo | +5 |
| Deadline | +5 |
| Filter Todo | +5 |

Nilai maksimal dengan bonus: **115**

---

# 📦 Ketentuan Pengumpulan

Buat project dengan struktur:

```text
todo-list/
├── todo.js
└── README.md
```

### `todo.js`

Berisi seluruh source code aplikasi.

### `README.md`

Berisi:

1. Nama
2. Deskripsi project
3. Cara menjalankan program
4. Screenshot program
5. Fitur yang berhasil dibuat

Contoh menjalankan:

```bash
node todo.js
```

---

# ⚠️ Catatan

Jangan menggunakan library atau framework tambahan untuk membuat fitur utama.

Gunakan JavaScript yang sudah dipelajari.

Tujuan evaluasi ini bukan membuat aplikasi yang sempurna, tetapi menunjukkan bahwa kamu sudah mampu **menggabungkan konsep-konsep JavaScript menjadi sebuah program yang benar-benar bisa digunakan.**

Selamat mengerjakan! 🚀