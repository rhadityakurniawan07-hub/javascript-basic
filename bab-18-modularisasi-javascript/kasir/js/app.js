import { produk, cariProduk } from "./produk.js";
import formatRupiah, {
  hitungSubtotal,
  hitungTotal
} from "./transaksi.js";

const daftarProduk = document.getElementById("daftarProduk");

produk.forEach((item, index) => {
  daftarProduk.innerHTML += `
    <div class="produk">
      ${index + 1}. ${item.nama} - ${formatRupiah(item.harga)}
    </div>
  `;
});

const transaksi = [
  {
    produk: cariProduk(1),
    jumlah: 2,
  },
  {
    produk: cariProduk(2),
    jumlah: 1,
  },
  {
    produk: cariProduk(3),
    jumlah: 1,
  },
];

transaksi.forEach((item) => {
  item.subtotal = hitungSubtotal(
    item.produk.harga,
    item.jumlah
  );
});

const total = hitungTotal(transaksi);

const struk = document.getElementById("struk");

transaksi.forEach((item) => {
  struk.innerHTML += `
    <p class="item-transaksi">
      ${item.produk.nama} x ${item.jumlah} = ${formatRupiah(item.subtotal)}
    </p>
  `;
});

struk.innerHTML += `
  <div class="total">
    Total = ${formatRupiah(total)}
  </div>
`;