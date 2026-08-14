const sekarang = new Date("2026-08-13");
const deadline = new Date("2026-08-20");

const selisihWaktu = deadline.getTime() - sekarang.getTime();

const selisihHari = selisihWaktu / (1000 * 60 * 60 * 24);

console.log(
  "Deadline:",
  deadline.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
);

if (selisihHari < 0) {
  console.log("Deadline sudah terlewat.");
} else {
  console.log("Sisa waktu:", selisihHari, "hari lagi");
}