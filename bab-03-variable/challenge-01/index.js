const namaProduk = "Sepatu Lari";
const hargaSatuan = 350000;
const TARIF_PAJAK = 0.11;

let jumlahDibeli = 2;
let totalSebelumPajak = hargaSatuan * jumlahDibeli;
let pajak = totalSebelumPajak * TARIF_PAJAK;
let totalAkhir = totalSebelumPajak + pajak;

console.log("Produk     :", namaProduk);
console.log("Harga      : Rp", hargaSatuan);
console.log("Jumlah     :", jumlahDibeli);
console.log("Subtotal   : Rp", totalSebelumPajak);
console.log("Pajak (11%): Rp", pajak);
console.log("Total      : Rp", totalAkhir);
