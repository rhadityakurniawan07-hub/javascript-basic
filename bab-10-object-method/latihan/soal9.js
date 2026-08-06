//  Method dengan Parameter
const akunBank = {
  pemilik: "Rhaditya",
  saldo: 100000,

  setor: function(jumlah) {
    this.saldo += jumlah;
  }
};

console.log("Saldo awal :", akunBank.saldo);

akunBank.setor(50000);

console.log("Saldo sekarang :", akunBank.saldo);