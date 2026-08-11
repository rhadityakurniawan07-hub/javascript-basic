const namaProduk = "   keyboard mechanical   ";
const hargaProduk = "750000.50";
const kodeProduk = "PROD-2026-001";

const namaBersih = namaProduk.trim();
const namaTampil = namaBersih
  .toLowerCase()
  .replace(/\b\w/g, huruf => huruf.toUpperCase());

const harga = parseFloat(hargaProduk);

const kode = kodeProduk.toUpperCase();

console.log("===== DATA PRODUK =====");
console.log("");
console.log("Nama  :", namaTampil);
console.log("Harga : Rp" + harga.toFixed(2));
console.log("Kode  :", kode);
console.log("");
console.log("=======================");

const namaValid = namaBersih !== "";
const hargaValid = typeof harga === "number" && !isNaN(harga);
const kodeAwalValid = kode.startsWith("PROD");
const kodeAkhirValid = kode.endsWith("001");

console.log("");
console.log("===== VALIDASI =====");
console.log("Nama tidak kosong :", namaValid);
console.log("Harga berupa Number :", hargaValid);
console.log("Kode diawali PROD :", kodeAwalValid);
console.log("Kode diakhiri 001 :", kodeAkhirValid);