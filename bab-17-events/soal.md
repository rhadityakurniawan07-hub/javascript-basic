# 🎬 Soal Bab 17: JS Events – Pemesanan Tiket Bioskop

## 📖 Study Case

Sebuah website bioskop ingin membuat halaman pemesanan tiket sederhana.

Pelanggan dapat mengisi **nama**, **email**, dan **judul film**, lalu menekan tombol **Pesan Tiket**.

Setelah berhasil, halaman menampilkan daftar pemesanan **tanpa melakukan reload halaman**.

Buat halaman interaktif menggunakan **HTML, CSS, dan JavaScript** dengan dua area utama:

| Area | Fungsi |
|---|---|
| 📝 Form Pemesanan | Tempat input data dan tombol aksi |
| 🎫 Daftar Pesanan | Menampilkan semua tiket yang sudah dipesan |

---

# 🚀 Fitur yang Harus Dibuat

## 1. Form Pemesanan

Buat sebuah form yang memiliki:

- Input **Nama** (`type="text"`)
- Input **Email** (`type="email"`)
- Input **Judul Film** (`type="text"`)
- Tombol **Pesan Tiket** (`type="submit"`)
- Tombol **Reset Form** (`type="button"`)

---

## 2. Event Submit

Gunakan event `submit` pada form.

Ketika form dikirim:

1. Gunakan `event.preventDefault()` agar halaman tidak reload.
2. Ambil nilai dari setiap input.
3. Gunakan `.trim()` untuk membersihkan spasi di awal dan akhir.
4. Validasi data.
5. Jika ada input yang kosong, tampilkan:

```text
⚠️ Nama, email, dan judul film wajib diisi!