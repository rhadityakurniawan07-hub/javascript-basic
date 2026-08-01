/* soal 1 Operator Aritmatika */
const panjang = 15;
const lebar = 8;

const Luas = panjang * lebar;
const Keliling = 2 * (panjang + lebar);

console.log("Luas     :", Luas);
console.log("Keliling :", Keliling);


/* soal 2 Modulus */
const angka = 29;

console.log(angka % 2);
console.log(angka % 4);
console.log(angka % 5);


/* soal 3 Increment & Decrement */
let stok = 20;
stok++;
stok--;

console.log(stok);


/* soal 4 Assignment Operator */
let Saldo = 100000;

Saldo += 50000; 
console.log(Saldo); 

Saldo -= 25000; 
console.log(Saldo); 

Saldo /= 5;
console.log(Saldo);

Saldo *= 2; 
console.log(Saldo);


/* soal 5 Studi Kasus Kasir */
const harga = 18000;
const jumlah = 6;
const diskon = 10000;

const subtotal = harga * jumlah;
const total = subtotal - diskon;

console.log("Subtotal :", subtotal);
console.log("Total    :", total);


/* soal 6 Operator Perbandingan */
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(5 <= 3);     // false
console.log(8 != 8);     // false
console.log(12 != "12"); // false


/* soal 7 == vs === */
console.log(10 == "10");         true
console.log(10 === "10");        false
console.log(false == 0);         true
console.log(false === 0);        false
console.log(null == undefined);  true
console.log(null === undefined); false
// penjelasan nya karena beda nya cuma samadengan (==) (===)


/* soal 8 Operator Logika */
let sudahLogin = true;
let sudahVerifikasi = false;
let premium = true;

let bolehMasuk = sudahLogin && sudahVerifikasi;
let dapatFiturPremium = premium || sudahVerifikasi;

console.log("Boleh masuk:", bolehMasuk);
console.log("Dapat fitur premium:", dapatFiturPremium);


/* soal 9 Operator NOT */
let lampuNyala = true;
console.log(!lampuNyala); 


/* soal 10 Prioritas Operator */
console.log(8 + 4 * 2); 
console.log((8 + 4) * 2);
console.log(20 / 5 + 3 * 2);

/* penjelasan nya 
1. (2 * 4 = 8 + 8 = 16) perkalian dahulu lalu pertambah
2. ((8 + 4) = 12 * 2 = 24) pertambahan dahulu lalu perkalian
3. (20 / 5 = 4,  3 * 2 = 6,  4 + 6 = 10) pembagian terlebih dahulu lalu setelah itu perkalian dan ahsil nya di jumlah kan
*/


/* soal 11 Debugging */
let angka1 = 20;

angka2 = angka + 5;

console.log(angka1);



/* soal 12 Analisis Kode */
let umur = "18";

console.log(umur > 17);
console.log(umur === 18);

/* 
1. true ( umur berisi String karena ada tanda kutip)
2. false ( ( === ) adalah strict equality, sehingga membandingkan nilai dan tipe data.)
*/



/* soal 13 Studi Kasus Seleksi Peserta */
const Umur = 20;
let punyaKTP = true;
let sudahDaftar = true;
let lolos = umur >= 17 && punyaKTP && sudahDaftar;

console.log(lolos);



/* soal 14 Challenge Mini Kasir */
const hargaBuku = 45000;
const jumlahBeli = 4;
let promo = 15000;

const hasil = hargaBuku * jumlahBeli;
const totalBayar = subtotal - promo;

console.log("Subtotal   :", subtotal);
console.log("Total bayar:", totalBayar);
/* 
1.Subtotal : 108000
2.TotalBayar: 93000
*/




/* soal 15 Challenge Akhir */
let x = 12;

x += 8; // 20
x *= 2; // 40
x--;    // 39
x /= 3; //13

console.log(x);13



/* Bonus Challenge */
const tugas = 80;
const uts = 75;
const uas = 70;

const nilaiAkhir = (tugas + uts + uas) / 3;
const lulus = nilaiAkhir >= 75;

console.log("Nilai Akhir :", nilaiAkhir);
console.log("Lulus       :", lulus);

