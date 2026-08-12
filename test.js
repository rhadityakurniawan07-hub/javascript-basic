const namaProduk = "   keyboard mechanical   ";
const hargaProduk = "750000.50";
const kodeProduk = "PROD-2026-001";

const namaBersih = namaProduk.trim();
const harga = parseFloat(hargaProduk);

const kodeAwal = kodeProduk.startsWith("PROD");
const kodeAkhir = kodeProduk.endsWith("001");

console.log("===== DATA PRODUK =====");
console.log("Nama  :", namaBersih);
console.log("Harga : Rp" + harga.toFixed(2));
console.log("Kode  :", kodeProduk);
console.log("=======================");

if (namaBersih.length > 0) {
    console.log("Nama produk valid");
} else {
    console.log("Nama produk tidak boleh kosong");
};

if (!isNaN(harga)) {
    console.log("Harga valid");
} else {
    console.log("Harga tidak valid");
};

if (kodeAwal) {
    console.log("Kode diawali PROD");
} else {
    console.log("Kode tidak diawali PROD");
};

if (kodeAkhir) {
    console.log("Kode diakhiri 001");
} else {
    console.log("Kode tidak diakhiri 001");
};