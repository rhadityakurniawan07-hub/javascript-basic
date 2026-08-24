# Soal Bab 18: Modularisasi JavaScript

## 💼 Study Case - Sistem Kasir Sederhana

Sebuah toko membutuhkan aplikasi kasir sederhana. Agar kode tidak menumpuk dalam satu file, aplikasi harus dibuat menggunakan **modularisasi JavaScript**.

Buat project dengan struktur berikut:

```text
kasir/
├── index.html
├── js/
│   ├── app.js
│   ├── produk.js
│   └── transaksi.js
└── css/
    └── style.css
```

## 🎯 Tujuan

Project ini harus menggunakan:

- `export`
- `import`
- Named Export
- Default Export
- `type="module"`
- Function
- Array
- Object
- Perulangan

## 1. Modul Produk

Buat file:

```text
js/produk.js
```

Buat data produk berikut:

```javascript
const produk = [
  {
    id: 1,
    nama: "Keyboard",
    harga: 250000,
  },
  {
    id: 2,
    nama: "Mouse",
    harga: 150000,
  },
  {
    id: 3,
    nama: "Headset",
    harga: 300000,
  },
];
```

Export data tersebut menggunakan **Named Export**.

Tambahkan function:

```javascript
cariProduk(id)
```

Function digunakan untuk mencari produk berdasarkan `id`.

Export function tersebut menggunakan **Named Export**.

## 2. Modul Transaksi

Buat file:

```text
js/transaksi.js
```

Buat function:

```javascript
hitungSubtotal(harga, jumlah)
```

Function digunakan untuk menghitung:

```text
harga × jumlah
```

Contoh:

```javascript
hitungSubtotal(250000, 2);
```

Hasil:

```text
500000
```

Kemudian buat function:

```javascript
formatRupiah(harga)
```

Function digunakan untuk mengubah angka menjadi format Rupiah.

Contoh:

```javascript
formatRupiah(250000);
```

Hasil:

```text
Rp250.000
```

Jadikan `formatRupiah()` sebagai **Default Export**.

Jadikan `hitungSubtotal()` sebagai **Named Export**.

## 3. File Utama

Buat file:

```text
js/app.js
```

Import data dan function dari:

```text
produk.js
transaksi.js
```

Gunakan:

```javascript
import
```

untuk mengambil:

- `produk`
- `cariProduk`
- `hitungSubtotal`
- `formatRupiah`

Kemudian tampilkan daftar produk ke halaman.

Contoh tampilan:

```text
==============================
        DAFTAR PRODUK
==============================

1. Keyboard - Rp250.000
2. Mouse    - Rp150.000
3. Headset  - Rp300.000
```

## 4. Simulasi Transaksi

Di `app.js`, buat transaksi sederhana:

```text
Produk  : Keyboard
Jumlah  : 2
```

Gunakan:

```javascript
cariProduk()
```

untuk mendapatkan data Keyboard.

Kemudian gunakan:

```javascript
hitungSubtotal()
```

untuk menghitung total harga.

Tampilkan:

```text
==============================
        STRUK TRANSAKSI
==============================

Produk   : Keyboard
Harga    : Rp250.000
Jumlah   : 2
Subtotal : Rp500.000
```

## 5. Hubungkan dengan HTML

Pada:

```text
index.html
```

gunakan:

```html
<script type="module" src="./js/app.js"></script>
```

**Tidak boleh** menggunakan:

```html
<script src="./js/app.js"></script>
```

Pastikan aplikasi dapat dijalankan menggunakan **Live Server**.

# ⭐ Final

Tambahkan produk baru:

```javascript
{
  id: 4,
  nama: "Webcam",
  harga: 450000,
}
```

Kemudian buat function:

```javascript
hitungTotal(transaksi)
```

Function tersebut menghitung total seluruh subtotal transaksi.

Contoh:

```text
Keyboard x 2 = Rp500.000
Mouse x 1    = Rp150.000
Headset x 1  = Rp300.000

Total = Rp950.000
```

Function `hitungTotal()` harus dibuat di:

```text
js/transaksi.js
```

dan digunakan dari:

```text
js/app.js
```


# 📦 Ketentuan Pengumpulan

Project harus memiliki struktur:

```text
kasir/
├── index.html
├── js/
│   ├── app.js
│   ├── produk.js
│   └── transaksi.js
└── css/
    └── style.css
```

Program harus dapat dijalankan melalui **Live Server** dan tidak boleh menggunakan framework atau library tambahan.

> 🎯 **Fokus latihan:** bukan membuat aplikasi kasir yang kompleks, tetapi memahami bagaimana beberapa file JavaScript dapat saling berkomunikasi menggunakan `export` dan `import`.
