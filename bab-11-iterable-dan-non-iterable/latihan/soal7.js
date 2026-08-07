// Menampilkan Objek Kunci
const laptop = {
  merek: "ASUS",
  ram: "16GB",
  storage: "512GB",
};

for (const property in laptop) {
  console.log(property);
}