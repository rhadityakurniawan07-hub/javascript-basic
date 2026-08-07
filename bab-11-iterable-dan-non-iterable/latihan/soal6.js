//  Menggunakan for...in
const siswa = {
  nama: "Budi",
  umur: 17,
  kelas: "XI RPL",
};


for (let kunci in siswa) {
  console.log(kunci + ":", siswa[kunci]);
}