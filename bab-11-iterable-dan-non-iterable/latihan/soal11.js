// Prediksi Output
const angka = [10, 20, 30];

for (let item in angka) {
  console.log(item);
}

// karena for...in akan mengembalikan index dari array, maka outputnya adalah 0, 1, 2
// makanya berdeda dengan soal10.kalau soal10 menggunakan for...of yang mengembalikan value dari array,
// maka outputnya adalah 10, 20, 30