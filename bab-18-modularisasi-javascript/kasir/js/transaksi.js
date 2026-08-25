function hitungSubtotal(harga, jumlah) {
  return harga * jumlah;
}

function formatRupiah(harga) {
  return "Rp" + harga.toLocaleString("id-ID");
}

function hitungTotal(transaksi) {
  return transaksi.reduce((total, item) => {
    return total + item.subtotal;
  }, 0);
}

export { hitungSubtotal, hitungTotal };
export default formatRupiah;