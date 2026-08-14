const nilai = [80, 90, 75, 95, 85];

function prosesNilai(...nilai) {
  const nilaiTertinggi = Math.max(...nilai);
  const nilaiTerendah = Math.min(...nilai);

  let totalNilai = 0;

  for (let angka of nilai) {
    totalNilai += angka;
  }

  return {
    nilaiTertinggi: nilaiTertinggi,
    nilaiTerendah: nilaiTerendah,
    totalNilai: totalNilai
  };
}

const hasil = prosesNilai(80, 90, 75, 95, 85);

const {
  nilaiTertinggi,
  nilaiTerendah,
  totalNilai
} = hasil;

console.log("Nilai tertinggi :", nilaiTertinggi);
console.log("Nilai terendah  :", nilaiTerendah);
console.log("Total nilai     :", totalNilai);