// Tantangan Biodata
const biodata = {
  nama: "Andi",
  umur: 20,
  pekerjaan: "Programmer",
  kota: "Yogyakarta",
};
console.log("===== BIODATA =====");
for (let key in biodata) {
  console.log( key + ":", biodata[key]);
}