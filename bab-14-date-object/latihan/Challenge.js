const namaEvent = "JavaScript Bootcamp";
const tanggalEvent = new Date("2026-09-05");

const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu"
];

const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];

const hari = namaHari[tanggalEvent.getDay()];
const tanggal = tanggalEvent.getDate();
const bulan = namaBulan[tanggalEvent.getMonth()];
const tahun = tanggalEvent.getFullYear();

console.log("=============================");
console.log("     INFORMASI EVENT");
console.log("=============================");
console.log();
console.log("Nama Event :", namaEvent);
console.log("Hari       :", hari);
console.log("Tanggal    :", tanggal, bulan, tahun);
console.log();
console.log("=============================");