console.log(nama);
// ReferenceError: Cannot access 'kota' before initialization
let nama = "Budi";

/*
Berbeda dengan var, variabel letdan const tidak dapat diakses sebelum baris deklarasinya meskipun secara teknis deklarasinya diproses.
 Mengaksesnya sebelum dideklarasikan akan menghasilkan ReferenceError.
*/