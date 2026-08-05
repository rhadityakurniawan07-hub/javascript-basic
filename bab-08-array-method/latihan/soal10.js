// splice()
let buah = [
  "Apel",
  "Jeruk",
  "Mangga",
  "Anggur",
];

let dihapus = buah.splice(1, 1);
console.log(dihapus); // Output: ["Jeruk"]
console.log(buah); // ["Apel", "Mangga", "Anggur"]

buah.splice(1, 0, "Semangka");
console.log(buah); // ["Apel", "Semangka", "Mangga", "Anggur"]