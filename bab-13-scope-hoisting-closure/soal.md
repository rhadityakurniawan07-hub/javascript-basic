# Soal Bab 13: Scope, Hoisting, & Closure

## 🎯 Tujuan

Setelah mengerjakan latihan ini, kamu diharapkan mampu:

* Memahami batas akses sebuah variabel berdasarkan scope.
* Membedakan Global Scope, Function Scope, dan Block Scope.
* Memahami Scope Chain.
* Memprediksi perilaku Hoisting pada `var`, `let`, `const`, dan Function Declaration.
* Memahami konsep Closure.
* Menggunakan Closure untuk membuat data yang tidak dapat diakses langsung dari luar.

---

# Soal 1 - Mengenal Scope

Tentukan scope dari setiap variabel berikut.

```javascript
const nama = "Budi";

function belajar() {
  const bahasa = "JavaScript";

  if (true) {
    let level = "Pemula";
    console.log(level);
  }
}
```

Tentukan:

1. `nama` termasuk scope apa?
2. `bahasa` termasuk scope apa?
3. `level` termasuk scope apa?

Jelaskan alasanmu.

---

# Soal 2 - Apakah Bisa Diakses?

Perhatikan kode berikut:

```javascript
const nama = "Budi";

function tampilkanNama() {
  const umur = 17;

  console.log(nama);
  console.log(umur);
}

tampilkanNama();

console.log(nama);
console.log(umur);
```

Tentukan:

* Baris mana yang berhasil dijalankan?
* Baris mana yang menghasilkan error?

Jelaskan mengapa.

---

# Soal 3 - Block Scope

Apa output dari kode berikut?

```javascript
if (true) {
  let pesan = "Halo Santri";

  console.log(pesan);
}

console.log(pesan);
```

Apakah program berhasil?

Jika tidak, jelaskan penyebabnya.

---

# Soal 4 - Scope Chain

Prediksi output:

```javascript
const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";

    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);
```

Tuliskan output secara berurutan.

Kemudian jelaskan mengapa setiap `console.log()` menghasilkan nilai yang berbeda.

---

# Soal 5 - Mencari Variabel

Perhatikan:

```javascript
const pajak = 10;

function hitungHarga(harga) {
  const totalPajak = harga * (pajak / 100);

  return harga + totalPajak;
}

console.log(hitungHarga(100000));
```

Jawab:

1. Di mana `pajak` dibuat?
2. Di mana `totalPajak` dibuat?
3. Mengapa `hitungHarga()` dapat menggunakan `pajak`?
4. Apakah `totalPajak` dapat digunakan di luar fungsi?

---

# Soal 6 - Hoisting Function

Apa output program berikut?

```javascript
sapa();

function sapa() {
  console.log("Halo Santri!");
}
```

Mengapa fungsi dapat dipanggil sebelum deklarasinya?

---

# Soal 7 - Hoisting `var`

Prediksi output:

```javascript
console.log(nama);

var nama = "Budi";

console.log(nama);
```

Tuliskan outputnya dan jelaskan mengapa `console.log()` pertama tidak menghasilkan error.

---

# Soal 8 - Hoisting `let`

Apa yang terjadi pada kode berikut?

```javascript
console.log(nama);

let nama = "Budi";
```

Apakah hasilnya:

A.

```text
undefined
```

B.

```text
Budi
```

C.

```text
ReferenceError
```

Pilih jawaban dan jelaskan alasannya.

---

# Soal 9 - Hoisting `const`

Apa yang terjadi?

```javascript
console.log(umur);

const umur = 17;
```

Bandingkan perilakunya dengan:

```javascript
console.log(umur);

var umur = 17;
```

Apa perbedaan keduanya?

---

# Soal 10 - Tebak Output Hoisting

Prediksi output program berikut tanpa menjalankannya:

```javascript
console.log(a);
var a = 10;

console.log(b);
let b = 20;
```

Apakah kedua `console.log()` berhasil dijalankan?

Jelaskan.

---

# Soal 11 - Perbaiki Kode

Kode berikut menghasilkan error:

```javascript
function tampilkanData() {
  console.log(nama);
  console.log(umur);
}

tampilkanData();

const nama = "Budi";
const umur = 17;
```

Perbaiki kode tersebut agar dapat dijalankan dengan benar.

---

# 💼 Study Case 1 - Sistem Login

Sebuah aplikasi login memiliki token sesi yang hanya boleh digunakan di dalam proses login.

```javascript
function prosesLogin() {
  const tokenSesi = "abc123";

  console.log("Login berhasil");
  console.log("Token:", tokenSesi);
}

prosesLogin();
```

Sekarang tambahkan kode:

```javascript
console.log(tokenSesi);
```

Apa yang terjadi?

### Tantangan

Jelaskan mengapa `tokenSesi` tidak dapat digunakan dari luar fungsi.

Kemudian buat variabel `namaUser` yang dapat digunakan baik di dalam maupun di luar fungsi.

---

# 💼 Study Case 2 - Sistem Rekening Bank

Buat fungsi:

```javascript
buatRekening(saldoAwal)
```

Fungsi tersebut harus memiliki variabel `saldo` yang **tidak dapat diakses langsung dari luar**.

Contoh penggunaan:

```javascript
const rekening = buatRekening(1000000);

rekening.cekSaldo();

rekening.setor(500000);

rekening.tarik(200000);

rekening.cekSaldo();
```

Output:

```text
Saldo saat ini: 1000000
Setoran berhasil. Saldo: 1500000
Penarikan berhasil. Saldo: 1300000
Saldo saat ini: 1300000
```

### Ketentuan

Gunakan **Closure**.

Buat tiga method:

```javascript
cekSaldo()
setor(jumlah)
tarik(jumlah)
```

Pastikan kode berikut tidak dapat digunakan untuk mengubah saldo secara langsung:

```javascript
rekening.saldo = 999999999;
```

---

# Soal 12 - Memahami Closure

Perhatikan kode:

```javascript
function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitung = buatPenghitung();

penghitung();
penghitung();
penghitung();
```

Tentukan outputnya.

Kemudian jawab:

1. Di mana variabel `hitungan` dibuat?
2. Mengapa `hitungan` masih bisa digunakan setelah `buatPenghitung()` selesai?
3. Fungsi mana yang mengingat `hitungan`?

---

# Soal 13 - Dua Closure

Perhatikan:

```javascript
function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    console.log(hitungan);
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

penghitungA();
penghitungA();

penghitungB();

penghitungA();
penghitungB();
```

Prediksi output.

Kemudian jelaskan:

> Mengapa `penghitungA` dan `penghitungB` tidak menggunakan nilai `hitungan` yang sama?

---

# Soal 14 - Buat Closure Sendiri

Buat fungsi:

```javascript
buatCounter()
```

yang menghasilkan sebuah fungsi untuk menghitung jumlah klik.

Contoh:

```javascript
const counter = buatCounter();

counter();
counter();
counter();
counter();
```

Output:

```text
Jumlah klik: 1
Jumlah klik: 2
Jumlah klik: 3
Jumlah klik: 4
```

Variabel jumlah klik harus berada di dalam Closure.

---

# 💼 Study Case 3 - Sistem Saldo Digital

Sebuah aplikasi memiliki saldo pengguna.

Buat:

```javascript
buatDompet(saldoAwal)
```

Contoh:

```javascript
const dompet = buatDompet(50000);

dompet.cekSaldo();
dompet.tambahSaldo(25000);
dompet.kurangiSaldo(10000);
dompet.cekSaldo();
```

Output:

```text
Saldo: 50000
Saldo berhasil ditambah: 75000
Saldo berhasil dikurangi: 65000
Saldo: 65000
```

### Aturan

Saldo harus bersifat privat.

Kode berikut tidak boleh dapat mengakses saldo:

```javascript
console.log(dompet.saldo);
```

Output yang diharapkan:

```text
undefined
```

---

# ⭐ Final Challenge - Sistem Akun Pengguna

Buat sebuah fungsi:

```javascript
buatAkun(nama, saldoAwal)
```

Fungsi tersebut harus menggunakan **Closure** untuk menyimpan:

```text
nama
saldo
```

Buat method:

```javascript
lihatProfil()
cekSaldo()
tambahSaldo(jumlah)
kurangiSaldo(jumlah)
```

Contoh:

```javascript
const akun = buatAkun("Budi", 100000);

akun.lihatProfil();

akun.cekSaldo();

akun.tambahSaldo(50000);

akun.kurangiSaldo(25000);

akun.cekSaldo();
```

Output:

```text
===== PROFIL =====
Nama: Budi

Saldo: Rp100000

Saldo berhasil ditambahkan.
Saldo sekarang: Rp150000

Saldo berhasil dikurangi.
Saldo sekarang: Rp125000
```

### Ketentuan

1. `nama` dan `saldo` berada di dalam scope fungsi.
2. `nama` dan `saldo` tidak boleh dapat diakses langsung dari luar.
3. Semua perubahan saldo harus melalui method.
4. Jika saldo tidak mencukupi, tampilkan:

```text
Saldo tidak mencukupi.
```

5. Buat minimal satu akun tambahan.

Contoh:

```javascript
const akunBudi = buatAkun("Budi", 100000);
const akunAni = buatAkun("Ani", 500000);
```

Pastikan saldo Budi dan Ani **terpisah**.

---

# 🧠 Pertanyaan Refleksi

Jawab dengan bahasamu sendiri.

1. Apa yang dimaksud dengan Scope?
2. Apa perbedaan Global Scope dan Local Scope?
3. Apa yang dimaksud dengan Block Scope?
4. Apa itu Scope Chain?
5. Apa yang dimaksud dengan Hoisting?
6. Apa perbedaan hoisting `var` dengan `let` dan `const`?
7. Apa yang dimaksud dengan Closure?
8. Mengapa Closure dapat digunakan untuk membuat data privat?
9. Mengapa dua Closure yang dibuat dari fungsi yang sama dapat memiliki data yang berbeda?
10. Menurutmu, apa manfaat Closure dalam aplikasi nyata?
