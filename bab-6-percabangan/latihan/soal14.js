// Challenge Mesin ATM
let saldo = 150000;
let tarikTunai = 100000;

if (saldo >= tarikTunai) {
  let sisaSaldo = saldo - tarikTunai;
  console.log("Penarikan berhasil");
  console.log("Sisa saldo : " + sisaSaldo);
} else {
  console.log("Saldo tidak mencukupi");
}