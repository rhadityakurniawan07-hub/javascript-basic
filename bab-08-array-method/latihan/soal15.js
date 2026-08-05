// Challenge Inventaris
let inventaris = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor",
];

let posisiKeyboard = inventaris.indexOf("Keyboard");
let adaPrinter = inventaris.includes("Printer");
let indeksMouse = inventaris.indexOf("Mouse");
if (indeksMouse !== -1) {
  inventaris[indeksMouse] = "Headset";
}
let duaBarangTerakhir = inventaris.slice(-2);

console.log("Inventaris terbaru:", inventaris);
console.log("Posisi Keyboard:", posisiKeyboard); 
console.log("Hasil pengecekan Printer:", adaPrinter);
console.log("Dua barang terakhir:", duaBarangTerakhir);