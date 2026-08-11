const hargaBarang = "125000.50";
const jumlah = "3";

const harga = parseFloat(hargaBarang);

const jumlahBarang = Number(jumlah);

const subtotal = harga * jumlahBarang;

console.log("Harga   : Rp" + harga.toFixed(2));
console.log("Jumlah  : " + jumlahBarang);
console.log("Subtotal: Rp" + subtotal.toFixed(2));