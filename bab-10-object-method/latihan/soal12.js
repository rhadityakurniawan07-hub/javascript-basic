// Iterasi Object
const laptop = {
  merek: "ASUS",
  ram: "16GB",
  storage: "512GB",
  harga: 15000000,
};
for (let key in laptop) {
  console.log(key + ":", laptop[key]);
}