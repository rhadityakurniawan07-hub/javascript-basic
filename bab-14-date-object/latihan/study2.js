const tanggalTransaksi = new Date("2026-08-13");

const tanggalJatuhTempo = new Date(tanggalTransaksi);
tanggalJatuhTempo.setDate(tanggalJatuhTempo.getDate() + 7);

const formatTanggal = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

console.log(
  "Tanggal Transaksi :",
  tanggalTransaksi.toLocaleDateString("id-ID", formatTanggal)
);

console.log(
  "Jatuh Tempo       :",
  tanggalJatuhTempo.toLocaleDateString("id-ID", formatTanggal)
);
