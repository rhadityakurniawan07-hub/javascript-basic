# Example 1 - CLI Sistem Inventaris

> ## ⚠️ Aturan Belajar
>
> Contoh ini digunakan dengan metode **ATM (Amati, Tiru, Modifikasi)**.
>
> **1. Amati**
> Baca dan pahami kode terlebih dahulu. Jangan langsung menjalankannya.
>
> **2. Tiru**
> Ketik ulang kode sendiri. **Dilarang copy-paste.**
>
> **3. Modifikasi**
> Setelah berhasil, ubah atau tambahkan fitur sesuai instruksi.
>
> **4. Pahami**
> Kamu harus mampu menjelaskan fungsi kode yang kamu tulis ketika ditanya mentor.
>
> **5. Jangan mencari source code yang sama di internet.**
> Kamu boleh mencari dokumentasi tentang syntax atau method yang belum dipahami.
>
> 🎯 **Tujuan:** bukan siapa yang paling cepat membuat program berjalan, tetapi siapa yang paling memahami bagaimana program tersebut bekerja.

---

## ▶️ Cara Menjalankan

Pastikan terminal berada di folder project.

### 1. Install `prompt-sync`

```bash
npm install prompt-sync
```

### 2. Buat file

Buat file:

```text
inventaris.js
```

### 3. Jalankan program

```bash
node inventaris.js
```

---

## 💻 Source Code

Ketik ulang kode berikut ke dalam `inventaris.js`.

```javascript
const prompt = require("prompt-sync")();

const inventaris = {
  barang: [],
  nextId: 1,

  tambahBarang() {
    const nama = prompt("Nama barang: ");
    const stok = Number(prompt("Stok: "));

    const barangBaru = {
      id: this.nextId,
      nama: nama,
      stok: stok,
    };

    this.barang.push(barangBaru);
    this.nextId++;

    console.log("Barang berhasil ditambahkan!");
  },

  lihatBarang() {
    console.log("\n===== DAFTAR BARANG =====");

    if (this.barang.length === 0) {
      console.log("Belum ada barang.");
      return;
    }

    for (let barang of this.barang) {
      console.log(
        `${barang.id}. ${barang.nama} | Stok: ${barang.stok}`
      );
    }
  },

  tambahStok() {
    const id = Number(prompt("Masukkan ID barang: "));
    const jumlah = Number(prompt("Jumlah stok: "));

    for (let barang of this.barang) {
      if (barang.id === id) {
        barang.stok += jumlah;

        console.log("Stok berhasil ditambahkan!");
        return;
      }
    }

    console.log("Barang tidak ditemukan.");
  },

  kurangiStok() {
    const id = Number(prompt("Masukkan ID barang: "));
    const jumlah = Number(prompt("Jumlah stok: "));

    for (let barang of this.barang) {
      if (barang.id === id) {
        if (jumlah > barang.stok) {
          console.log("Stok tidak mencukupi.");
          return;
        }

        barang.stok -= jumlah;

        console.log("Stok berhasil dikurangi!");
        return;
      }
    }

    console.log("Barang tidak ditemukan.");
  },

  hapusBarang() {
    const id = Number(prompt("Masukkan ID barang: "));

    for (let i = 0; i < this.barang.length; i++) {
      if (this.barang[i].id === id) {
        this.barang.splice(i, 1);

        console.log("Barang berhasil dihapus!");
        return;
      }
    }

    console.log("Barang tidak ditemukan.");
  },
};

let berjalan = true;

while (berjalan) {
  console.log(`
==============================
      SISTEM INVENTARIS
==============================

1. Tambah Barang
2. Lihat Barang
3. Tambah Stok
4. Kurangi Stok
5. Hapus Barang
6. Keluar
`);

  const pilihan = prompt("Pilih menu: ");

  if (pilihan === "1") {
    inventaris.tambahBarang();
  } else if (pilihan === "2") {
    inventaris.lihatBarang();
  } else if (pilihan === "3") {
    inventaris.tambahStok();
  } else if (pilihan === "4") {
    inventaris.kurangiStok();
  } else if (pilihan === "5") {
    inventaris.hapusBarang();
  } else if (pilihan === "6") {
    berjalan = false;

    console.log("Program selesai.");
  } else {
    console.log("Menu tidak tersedia.");
  }
}
```

---

# 👀 AMATI

Sebelum menulis ulang kode, coba pahami beberapa bagian berikut:

1. Apa fungsi `barang: []`?
2. Apa fungsi `nextId`?
3. Mengapa setiap barang dibuat menggunakan Object?
4. Apa fungsi method `tambahBarang()`?
5. Apa fungsi `this.barang`?
6. Mengapa digunakan `for...of` pada `lihatBarang()`?
7. Apa fungsi `push()`?
8. Apa fungsi `splice()`?
9. Mengapa `hapusBarang()` menggunakan `for` biasa?
10. Apa fungsi `while (berjalan)`?

---

# ✍️ TIRU

Sekarang ketik ulang program tersebut **tanpa copy-paste**.

Kamu boleh melihat contoh ketika lupa.

Setelah selesai, jalankan:

```bash
node inventaris.js
```

Pastikan semua menu dapat digunakan.

---

# 🚀 MODIFIKASI

Setelah berhasil membuat program yang sama, tambahkan **minimal 2 fitur baru**.

Contoh:

### 1. Tambahkan Harga Barang

Setiap barang memiliki:

```text
nama
stok
harga
```

Contoh:

```text
Keyboard | Stok: 10 | Harga: Rp250000
```

### 2. Cari Barang

Tambahkan menu untuk mencari barang berdasarkan nama.

Contoh:

```text
Pilih menu: Cari Barang

Masukkan nama barang: keyboard

Hasil:
1. Keyboard | Stok: 10
```

### 3. Modifikasi Bebas

Kamu juga boleh membuat fitur sendiri.

Contoh:

* Menampilkan barang dengan stok paling sedikit
* Mengubah nama barang
* Mengubah harga barang
* Menghitung total nilai inventaris
* Menampilkan semua barang menggunakan `for...in`

> 💡 **Ingat:** tahap modifikasi adalah bagian terpenting dari ATM. Jangan hanya membuat program yang sama persis dengan contoh.
