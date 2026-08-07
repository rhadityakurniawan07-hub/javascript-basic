//  Menghitung Total Nilai
const Nilai = [90, 80, 85, 100, 95];
let total = 0;

for (let nilai of Nilai) {
  total += nilai;
}

const rataRata = total / Nilai.length;
console.log("Total   :", total);