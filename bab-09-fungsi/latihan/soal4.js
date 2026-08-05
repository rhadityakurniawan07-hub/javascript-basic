// Parameter Default
function hitungDiskon(harga, diskon = 10) {
  return harga - (harga * diskon / 100);
}

console.log(hitungDiskon(100000));
console.log(hitungDiskon(100000, 20));