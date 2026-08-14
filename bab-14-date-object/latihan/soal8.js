const tanggal = new Date("2026-08-17");

tanggal.setMonth(11);

tanggal.setDate(25);

console.log(
  tanggal.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
);