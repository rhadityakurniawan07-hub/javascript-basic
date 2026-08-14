function formatTanggal(date) {
  const tgl = String(date.getDate()).padStart(2, "0");
  const bln = String(date.getMonth() + 1).padStart(2, "0");
  const thn = date.getFullYear();
  return tgl + "/" + bln + "/" + thn;
}

const fakturDibuat = new Date();
console.log(formatTanggal(fakturDibuat));