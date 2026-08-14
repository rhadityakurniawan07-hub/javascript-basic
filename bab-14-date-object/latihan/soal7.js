const tanggal = new Date("2026-08-17");

console.log(
  tanggal.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);