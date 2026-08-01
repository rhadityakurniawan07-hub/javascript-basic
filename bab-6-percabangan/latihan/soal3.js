// Predikat Nilai
let nilai = 87;
let predikat;

if (nilai >= 90) {
  predikat = "A";
} else if (nilai >= 80) {
  predikat = "B";
} else if (nilai >= 70) {
  predikat = "C";
} else if (nilai >= 60) {
  predikat = "D";
} else {
  predikat = "E";
}

console.log("Nilai  :", nilai); 
console.log("Predikat:", predikat);