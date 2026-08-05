//  Challenge Akhir
function hitungNilaiAkhir(tugas, uts, uas) {
  return (tugas + uts + uas) / 3;
}

const tugas = 80;
const uts = 85;
const uas = 81;

const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
const status = nilaiAkhir >= 75 ? "Lulus" : "Tidak Lulus";

console.log("Nilai Akhir :", nilaiAkhir);
console.log("Status      :", status);