// Challenge Diskon
let totalBelanja = 320000;
let diskonPersen = 0;

if (totalBelanja >= 500000) {
  diskonPersen = 20;
} else if (totalBelanja >= 250000) {
  diskonPersen = 10;
} else {
  diskonPersen = 0;
}

let potongan = (diskonPersen / 100) * totalBelanja;
let totalBayar = totalBelanja - potongan;

console.log("Diskon  : " + diskonPersen + "%");
console.log("Potongan : " + potongan);
console.log("Total Bayar : " + totalBayar);