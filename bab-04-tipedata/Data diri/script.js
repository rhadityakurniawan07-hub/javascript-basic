/* SOAL NO.1 */

let namaSiswa = "Rhaditya Kurniawan";
let umurSiswa = 19;
let sudahLulus = true;
let alamat = null;
let nomorTelepon;

console.log(typeof namaSiswa);      
console.log(typeof umurSiswa);      
console.log(typeof sudahLulus);    
console.log(typeof alamat);     
console.log(typeof nomorTelepon);  


/* SOAL NO.2 */

const hobi = [
  "Olahraga",
  "Bola",
  "Berenang",
  "Memanah",
  "Badminton"
];

console.log(hobi[0]);
console.log(hobi[2]);
console.log(hobi[hobi.length - 1]);


/* SOAL NO.3 */

const profil = {
  nama: "Rhadit",
  umur: 19,
  sekolah: "Pondok",
  jurusan: "Teknologi",
  status: "Pelajar"
};

console.log(profil.nama);
console.log(profil.umur);
console.log(profil.sekolah);
console.log(profil.jurusan);
console.log(profil.status);


/* SOAL NO.4 */

const nama4 = "Rhaditya";
let umur4 = 19;
const sudahLulus4 = true;
const alamat4 = { kota: "Bekasi" };
const nomorTelepon4 = undefined;
const hobi4 = ["Olahraga", "Berenang"];
const profil4 = {
  nama: "Rhaditya",
  umur: 19
};

console.log(typeof nama4);
console.log(typeof umur4);
console.log(typeof sudahLulus4);
console.log(typeof alamat4);
console.log(typeof nomorTelepon4);
console.log(typeof hobi4);
console.log(typeof profil4);


/* SOAL NO.5 */

console.log(typeof "Hello"); 
console.log(typeof 100);
console.log(typeof true);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof undefined);


/* SOAL NO.6 */

const tahun = "2026";
const umur6 = 17;
const aktif = true;

console.log(typeof tahun); 
console.log(typeof umur6); 
console.log(typeof aktif); 

console.log(tahun + 1); 
console.log(umur6 + 1); 

/* Jawaban:
1. Tipe data variabel 'tahun' adalah string karena nilainya menggunakan tanda petik.
2. Hasil tahun + 1 adalah "20261" karena string yang ditambah angka akan digabung .
3. Tipe data variabel 'umur6' adalah number.
4. Hasil umur6 + 1 adalah 18 karena merupakan operasi penjumlahan angka.
5. Fungsi typeof digunakan untuk mengetahui atau memeriksa tipe data suatu variabel atau nilai.
*/


/* BONUS */

const kelas = {
  namaKelas: "C",
  jumlahSiswa: 30,
  ketuaKelas: "Rhaditya Kurniawan",
  daftarMapel: [
    "Bahasa Jepang",
    "Bahasa Indonesia",
    "Pemrograman JavaScript",
    "Bahasa Inggris"
  ]
};

console.log("Nama Kelas      :", kelas.namaKelas);
console.log("Jumlah Siswa    :", kelas.jumlahSiswa);
console.log("Ketua Kelas     :", kelas.ketuaKelas);
console.log("Mapel Pertama   :", kelas.daftarMapel[0]);
console.log("Mapel Terakhir  :", kelas.daftarMapel[kelas.daftarMapel.length - 1]);