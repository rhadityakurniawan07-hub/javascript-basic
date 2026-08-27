# 📝 Tugas: Simple Blog — CRUD Artikel

Buat aplikasi **Simple Blog** yang memungkinkan pengguna untuk melihat, menambahkan, mengedit, dan menghapus artikel.

Data artikel diperoleh dari **JSONPlaceholder**:

`https://jsonplaceholder.typicode.com/posts`

Gunakan **JavaScript Vanilla**.

Tidak diperbolehkan menggunakan framework seperti React, Vue, Svelte, atau library DOM seperti jQuery.

---

# ✅ Fitur yang Wajib Dibuat

## 1. Menampilkan Artikel — READ

Ketika halaman pertama kali dibuka:

1. Ambil data artikel dari JSONPlaceholder.
2. Simpan data tersebut ke dalam sebuah **array of objects**.
3. Tampilkan artikel ke dalam halaman menggunakan DOM.

Minimal informasi yang ditampilkan:

* ID
* Judul
* Isi artikel
* Tombol **Edit**
* Tombol **Delete**

Contoh tampilan:

```text
------------------------------------------
Simple Blog

[ + Tambah Artikel ]

------------------------------------------

# 1
Judul artikel

Isi artikel...

[ Edit ] [ Delete ]

------------------------------------------

# 2
Judul artikel

Isi artikel...

[ Edit ] [ Delete ]

------------------------------------------
```

---

## 2. Menambahkan Artikel — CREATE

Buat form untuk menambahkan artikel.

Form minimal memiliki:

* Title
* Body
* Tombol Submit

Ketika form dikirim:

1. Ambil data dari form.
2. Buat object artikel baru.
3. Kirim data menggunakan:

```http
POST https://jsonplaceholder.typicode.com/posts
```

4. Jika berhasil, tambahkan artikel baru ke **array lokal**.
5. Render ulang daftar artikel ke DOM.

Contoh object:

```javascript
{
    id: 101,
    title: "Belajar JavaScript",
    body: "Hari ini saya belajar manipulasi DOM."
}
```

> Catatan: JSONPlaceholder tidak benar-benar menyimpan data secara permanen. Response dari POST cukup digunakan untuk simulasi.

---

## 3. Mengedit Artikel — UPDATE

Setiap artikel memiliki tombol **Edit**.

Ketika tombol Edit diklik:

1. Ambil data artikel berdasarkan ID.
2. Tampilkan data tersebut ke dalam form.
3. User dapat mengubah title dan body.
4. Kirim perubahan menggunakan:

```http
PUT https://jsonplaceholder.typicode.com/posts/{id}
```

5. Update object artikel di array lokal.
6. Render ulang daftar artikel.

---

## 4. Menghapus Artikel — DELETE

Setiap artikel memiliki tombol **Delete**.

Ketika tombol Delete diklik:

1. Tampilkan konfirmasi kepada user.
2. Jika user menyetujui:

   * Kirim request:

```http
DELETE https://jsonplaceholder.typicode.com/posts/{id}
```

3. Hapus artikel dari array lokal.
4. Render ulang daftar artikel.

---

# 🧠 Ketentuan JavaScript

Bagian ini **wajib diperhatikan**.

Data artikel harus dikelola menggunakan **array of objects**.

Contoh:

```javascript
let articles = [
    {
        id: 1,
        title: "Belajar JavaScript",
        body: "Belajar array dan object."
    },
    {
        id: 2,
        title: "Belajar DOM",
        body: "Belajar memanipulasi HTML menggunakan JavaScript."
    }
];
```

Minimal buat fungsi untuk:

```javascript
getArticles()
renderArticles()

addArticle()
editArticle()
deleteArticle()
```

Kamu boleh menggunakan nama fungsi lain selama fungsinya jelas.

---

# 🌐 API

Gunakan JSONPlaceholder:

```text
GET    /posts
POST   /posts
PUT    /posts/:id
DELETE /posts/:id
```

Base URL:

```text
https://jsonplaceholder.typicode.com
```

Gunakan:

```javascript
fetch()
```

untuk melakukan request API.

---

# 🎨 Tampilan

Tidak perlu membuat desain yang kompleks.

Yang penting:

* Tampilan rapi
* Responsive sederhana
* Artikel mudah dibaca
* Tombol Edit dan Delete mudah ditemukan
* Form mudah digunakan

Gunakan HTML dan CSS biasa.

Tidak perlu menggunakan Bootstrap, Tailwind, atau CSS framework lainnya.

---

# 📁 Struktur File

Gunakan struktur sederhana:

```text
simple-blog/
│
├── index.html
├── style.css
└── script.js
```

---

# ⭐ Bonus

Fitur berikut bersifat opsional.

### Search

Tambahkan fitur pencarian artikel berdasarkan title.

Contoh:

```text
[ 🔍 Cari artikel... ]
```

Ketika user mengetik:

```text
javascript
```

hanya artikel yang mengandung kata tersebut yang ditampilkan.

---

### Loading State

Tampilkan:

```text
Loading articles...
```

ketika aplikasi sedang mengambil data dari API.

---

### Error Handling

Jika API gagal diakses, tampilkan pesan:

```text
Gagal mengambil data artikel.
Silakan coba lagi.
```

---

### Empty State

Jika tidak ada artikel yang ditampilkan:

```text
Belum ada artikel.
```


# 📦 Yang Dikumpulkan

Kumpulkan project dalam bentuk repository Git.

Minimal berisi:

```text
index.html
style.css
script.js
README.md
```

README minimal menjelaskan:

1. Nama project
2. Cara menjalankan project
3. Teknologi yang digunakan
4. Fitur yang berhasil dibuat

---
