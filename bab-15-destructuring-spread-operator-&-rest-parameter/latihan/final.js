const timFrontend = [
  "Budi",
  "Andi",
  "Citra",
];

const timBackend = [
  "Doni",
  "Eko",
];

const seluruhTim = [...timFrontend, ...timBackend, "Fajar",];


const [anggotaPertama, ...anggotaLainnya] = seluruhTim;


function tampilkanTim(namaTim, ...anggota) {
  console.log("=============================");
  console.log(`      ${namaTim.toUpperCase()}`);
  console.log("=============================");
  console.log();

  anggota.forEach((nama, index) => {
    console.log(`${index + 1}. ${nama}`);
  });
}


tampilkanTim(
  "Developer Team",
  anggotaPertama,
  ...anggotaLainnya
);