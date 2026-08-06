// Challenge 3 - Simulasi Rekening Bank
const rekening = {
  pemilik: "Rhaditya",
  saldo: 1000000,

  setor(jumlah) {
    this.saldo += jumlah;
    console.log("Setor Rp" + jumlah);
    this.cekSaldo();
  },

  tarik(jumlah) {
    if (jumlah > this.saldo) {
      console.log("Saldo tidak mencukupi.");
      return;
    }

    this.saldo -= jumlah;
    console.log("Tarik Rp" + jumlah);
    this.cekSaldo();
  },

  cekSaldo() {
    console.log("Saldo : Rp" + this.saldo);
  }
};

rekening.cekSaldo();
rekening.setor(500000);
rekening.tarik(200000);