function buatKeranjang() {
  const items = [];

  return {
    tambah(nama, harga) {
      items.push({
        nama: nama,
        harga: harga
      });
    },

    hapus(nama) {
      const index = items.findIndex(item => item.nama === nama);

      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${nama} berhasil dihapus.`);
      }
    },

    lihatKeranjang() {
      console.log("\n===== KERANJANG =====");

      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
      });
    },

    hitungTotal() {
      let total = 0;

      items.forEach(item => {
        total += item.harga;
      });

      return total;
    },

    jumlahItem() {
      return items.length;
    }
  };
}



const keranjang = buatKeranjang();

keranjang.tambah("Keyboard", 250000);
keranjang.tambah("Mouse", 150000);

keranjang.lihatKeranjang();

keranjang.hapus("Mouse");

keranjang.lihatKeranjang();

console.log("\nJumlah item:", keranjang.jumlahItem());