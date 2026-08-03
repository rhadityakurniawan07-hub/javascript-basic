// 
const angka = [10, -5, 20, -8, 15, -1];

console.log("Nilai valid:");
for (let i = 0; i < angka.length; i++) {
  if (angka[i] < 0) {
    continue; 
  }
  console.log("-", angka[i]);
}