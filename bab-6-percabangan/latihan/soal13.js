// Challenge Nilai Akhir
let nilai = 76;
let keterangan = "";

if (nilai >= 90) {
  keterangan = "Sangat Baik";
} else if (nilai >= 75) {
  keterangan = "Baik";
} else if (nilai >= 60) {
  keterangan = "Cukup";
} else {
  keterangan = "Perlu Belajar Lagi";
}

console.log(keterangan);