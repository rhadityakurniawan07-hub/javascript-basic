function buatDompet(saldoAwal) {
  let saldo = saldoAwal;

  return {
    cekSaldo() {
      console.log("Saldo:", saldo);
    },

    tambahSaldo(jumlah) {
      saldo += jumlah;
      console.log("Saldo berhasil ditambah:", saldo);
    },

    kurangiSaldo(jumlah) {
      saldo -= jumlah;
      console.log("Saldo berhasil dikurangi:", saldo);
    }
  };
}

const dompet = buatDompet(50000);

dompet.cekSaldo();
dompet.tambahSaldo(25000);
dompet.kurangiSaldo(10000);
dompet.cekSaldo();

console.log(dompet.saldo);
