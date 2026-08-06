// Challenge 2 - Sistem Inventaris
const produk = {
  nama: "Laptop",
  harga: 7500000,
  stok: 20,

  tambahStok(jumlah) {
    this.stok += jumlah;
  },
  kurangiStok(jumlah) {
    this.stok -= jumlah;
  },
  tampilkanInfo() {
    console.log("Nama  :", this.nama);
    console.log("Harga :", this.harga);
    console.log("Stok  :", this.stok);
  }
};

produk.tampilkanInfo();
produk.tambahStok(10);
produk.kurangiStok(3);
produk.tampilkanInfo();