# Soal Bab 15: Destructuring, Spread Operator, & Rest Parameter

# 💼 Study Case 1 - Sistem Profil Pengguna

Sebuah aplikasi memiliki data pengguna:

    const pengguna = {
      nama: "Budi Santoso",
      email: "budi@email.com",
      umur: 20,
      kota: "Jakarta",
    };

Aplikasi ingin membuat profil baru berdasarkan data pengguna tersebut.

Buat object `profilBaru` menggunakan Spread Operator.

Kemudian ubah:

    kota: "Bandung"

dan tambahkan:

    status: "Aktif"

Hasil yang diharapkan:

    {
      nama: "Budi Santoso",
      email: "budi@email.com",
      umur: 20,
      kota: "Bandung",
      status: "Aktif"
    }

Pastikan object `pengguna` asli tidak berubah.

Setelah itu gunakan Object Destructuring untuk mengambil:

    nama
    email
    status

Kemudian tampilkan:

    Nama   : Budi Santoso
    Email  : budi@email.com
    Status : Aktif

---

# 💼 Study Case 2 - Sistem Keranjang Belanja

Sebuah toko memiliki dua daftar produk dari dua sumber berbeda.

    const keranjangA = [
      "Keyboard",
      "Mouse",
    ];

    const keranjangB = [
      "Monitor",
      "Headset",
    ];

Gunakan Spread Operator untuk menggabungkan kedua keranjang.

Hasil:

    [
      "Keyboard",
      "Mouse",
      "Monitor",
      "Headset"
    ]

Kemudian gunakan Array Destructuring untuk mengambil:

- Produk pertama
- Produk kedua
- Produk terakhir

Tampilkan:

    Produk pertama : Keyboard
    Produk kedua   : Mouse
    Produk terakhir: Headset

---

# ⭐ Challenge - Sistem Nilai Siswa

Sebuah aplikasi sekolah memiliki data nilai:

    const nilai = [80, 90, 75, 95, 85];

Buat fungsi:

    prosesNilai(...nilai)

Fungsi tersebut harus:

1. Menerima nilai dengan jumlah yang tidak tetap menggunakan Rest Parameter.
2. Menghitung nilai tertinggi menggunakan `Math.max()`.
3. Menghitung nilai terendah menggunakan `Math.min()`.
4. Menghitung jumlah seluruh nilai.
5. Mengembalikan object hasil.

Contoh:

    const hasil = prosesNilai(80, 90, 75, 95, 85);

Kemudian gunakan Object Destructuring untuk mengambil hasilnya.

Output:

    Nilai tertinggi : 95
    Nilai terendah  : 75
    Total nilai     : 425

---

# 🚀 Final Challenge - Sistem Manajemen Tim

Buat program sederhana untuk mengelola anggota tim.

Data awal:

    const timFrontend = [
      "Budi",
      "Andi",
      "Citra",
    ];

    const timBackend = [
      "Doni",
      "Eko",
    ];

Gunakan Spread Operator untuk membuat:

    const seluruhTim

yang berisi seluruh anggota dari `timFrontend` dan `timBackend`.

Kemudian tambahkan satu anggota baru:

    "Fajar"

Tanpa mengubah array `timFrontend` dan `timBackend`.

Setelah itu buat fungsi:

    tampilkanTim(namaTim, ...anggota)

Fungsi harus menampilkan nama tim dan seluruh anggotanya.

Contoh:

    tampilkanTim("Developer Team", ...seluruhTim);

Output:

    =============================
          DEVELOPER TEAM
    =============================

    1. Budi
    2. Andi
    3. Citra
    4. Doni
    5. Eko
    6. Fajar

Gunakan:

- Array Destructuring
- Spread Operator
- Rest Parameter
- Function
- Perulangan

---
