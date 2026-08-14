const tahunLahir = 2008;

const tanggalSekarang = new Date();

const tahunSekarang = tanggalSekarang.getFullYear();

const umur = tahunSekarang - tahunLahir;

console.log("Umur:", umur, "tahun");