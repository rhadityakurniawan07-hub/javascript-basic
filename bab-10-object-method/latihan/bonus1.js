// Challenge 1 - Biodata
const biodata = {
  nama: "Rhaditya Kurniawan",
  umur: 19,
  pekerjaan: "Pelajar",
  kota: "Bekasi",

  tampilkanBiodata() {
    console.log("===== BIODATA =====");
    console.log("Nama       :", this.nama);
    console.log("Umur       :", this.umur);
    console.log("Pekerjaan  :", this.pekerjaan);
    console.log("Kota       :", this.kota);
  }
};

biodata.tampilkanBiodata();