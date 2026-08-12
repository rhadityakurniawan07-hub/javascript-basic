console.log(nama); // Output: undefined — deklarasi diangkat, tapi nilai belum ada

var nama = "Budi";

console.log(nama); // Output: "Budi" — nilai sudah ada setelah baris penugasan dieksekusi
/*
- Variabel varjuga di-hoist, namun hanya deklarasinya saja — bukan nilai. 
Variabel nilai tetap undefinedhingga baris penugasannya dieksekusi.
- Ini Perilaku sering menjadi sumber bug yang sulit dilacak karena 
variabel tampak "sudah ada" namun nilainya masih undefined.
*/