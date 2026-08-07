// Tantangan Nilai Tertinggi
const nilai = [75, 90, 88, 100, 67, 95];

let nilaiTertinggi = nilai[0];

for (let angka of nilai) {
  if (angka > nilaiTertinggi) {
    nilaiTertinggi = angka;
  }
}

console.log("Nilai tertinggi :", nilaiTertinggi);