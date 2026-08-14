const keranjangA = ["Keyboard", "Mouse"];
const keranjangB = ["Monitor", "Headset"];

const keranjangGabungan = [...keranjangA, ...keranjangB];

const [produkPertama, produkKedua, , produkTerakhir] = keranjangGabungan;

console.log('Produk pertama :', produkPertama);
console.log('Produk kedua   :', produkKedua);
console.log('Produk terakhir:', produkTerakhir);