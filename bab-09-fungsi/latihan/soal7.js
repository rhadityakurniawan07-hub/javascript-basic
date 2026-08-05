//  Function Return String
function cekKelulusan(nilai) {
  if (nilai < 75) {
    return "Tidak Lulus.";
   
  }
  return "Lulus.";
}

console.log(cekKelulusan(80));
console.log(cekKelulusan(60));