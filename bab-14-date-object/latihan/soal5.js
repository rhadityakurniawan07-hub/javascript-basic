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

const tanggal = new Date("2026-08-17");

const bulan = namaBulan[tanggal.getMonth()];

console.log("Bulan:", bulan);