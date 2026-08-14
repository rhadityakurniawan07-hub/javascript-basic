const tugas = [
  {
    nama: "Membuat Website Portfolio",
    deadline: "2026-08-20",
  },
  {
    nama: "Mengerjakan Latihan JavaScript",
    deadline: "2026-08-15",
  },
  {
    nama: "Presentasi Project",
    deadline: "2026-09-01",
  },
];

const sekarang = new Date("2026-08-13");

sekarang.setDate(sekarang.getDate());

const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

console.log("===== DAFTAR TUGAS =====");
console.log();

tugas.forEach((item, index) => {
  const tanggalDeadline = new Date(item.deadline);

  const tahun = tanggalDeadline.getFullYear();
  const bulan = tanggalDeadline.getMonth();
  const tanggal = tanggalDeadline.getDate();
  const hari = tanggalDeadline.getDay();

  const selisihWaktu =
    tanggalDeadline.getTime() - sekarang.getTime();

  const selisihHari = Math.ceil(
    selisihWaktu / (1000 * 60 * 60 * 24)
  );


  const formatTanggal = tanggalDeadline.toLocaleDateString(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  console.log(`${index + 1}. ${item.nama}`);
  console.log(`   Deadline: ${formatTanggal}`);

  if (selisihHari < 0) {
    console.log("   Status  : Deadline sudah terlewat.");
  } else if (selisihHari === 0) {
    console.log("   Status  : Deadline hari ini");
  } else {
    console.log(`   Status  : ${selisihHari} hari lagi`);
  }

  console.log();
}
);