// Challenge Data Nilai
const nilai = [80, 95, 60, 75, 100];
let total = 0;

for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}

const rataRata = total / nilai.length;

console.log("Total = " + total);
console.log("Rata-rata = " + rataRata);