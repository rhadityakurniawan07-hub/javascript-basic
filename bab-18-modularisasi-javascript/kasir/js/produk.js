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
  {
    id: 4,
    nama: "Webcam",
    harga: 450000,
  },
];

function cariProduk(id) {
  return produk.find((item) => item.id === id);
}

export { produk, cariProduk };