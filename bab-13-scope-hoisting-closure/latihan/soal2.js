const nama = "Budi";

function tampilkanNama() {
  const umur = 17;

  console.log(nama);// ' tidah bisa diakses karena berada di dalam function tampilkanNama, 
  console.log(umur);// sehingga console.log(umur) akan error '
}                   
tampilkanNama();

console.log(nama);// ' bisa diakses karena berada di luar function tampilkanNama '
console.log(umur);