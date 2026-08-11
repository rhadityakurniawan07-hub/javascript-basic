console.log(Number("42px"));
console.log(parseInt("42px"));
// Output:
// NaN
// 42
// Penjelasan:
// Number(string) — Cara alternatif untuk mengonversi String ke Number. Lebih ketat dari parseInt dan parseFloat.
// parseInt(string) — mengabaikan karakter non-angka di belakang.