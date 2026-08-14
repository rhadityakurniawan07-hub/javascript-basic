const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu"
];

const tanggal = new Date("2026-08-17");

const nomorHari = tanggal.getDay();

console.log("Hari:", namaHari[nomorHari]);