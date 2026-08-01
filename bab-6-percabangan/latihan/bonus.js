// Bonus Challenge
let umur = 18;

if (umur < 0) {
  console.log("Umur tidak valid");
} else if (umur <= 5) {
  console.log("Kategori : Balita");
} else if (umur <= 12) {
  console.log("Kategori : Anak-anak");
} else if (umur <= 17) {
  console.log("Kategori : Remaja");
} else if (umur <= 59) {
  console.log("Kategori : Dewasa");
} else {
  console.log("Kategori : Lansia");
}