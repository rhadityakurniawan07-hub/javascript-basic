const pajak = 10;

function hitungHarga(harga) {
  const totalPajak = harga * (pajak / 100);

  return harga + totalPajak;
}

console.log(hitungHarga(100000));

/*
1. `pajak' dibuat di luar function hitungHarga().
2. totalPajak dibuat di dalam function:
3. JavaScript mencari pajak di dalam function.
4. akan terjadi error karena totalPajak hanya dikenal di dalam hitungHarga().
*/