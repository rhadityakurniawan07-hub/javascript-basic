// bonus 
const kelas = {
  nama: "JavaScript Dasar",
  mentor: "Pak Budi",
  jumlahSiswa: 20,
};

kelas.ruangan = "Lab Komputer";

for (let properti in kelas) {
  console.log(properti + " : ", kelas[properti]);
}