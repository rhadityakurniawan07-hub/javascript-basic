//  Tantangan Daftar Belanja
const daftarBelanja = [
  "Beras",
  "Minyak",
  "Gula",
  "Telur",
  "Sabun"
];

let nomor = 1;

for (let item of daftarBelanja) {
  console.log(nomor + ". " + item);
  nomor++;
}