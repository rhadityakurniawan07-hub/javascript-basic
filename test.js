function checkout(...collection) {
  console.log("Jumlah item:", collection.length);
  console.log("Daftar belanja:", collection);
}

checkout("Minyak", "Telur", "Mie");
// Output: Jumlah item: 3
// Output: Daftar belanja: ["Minyak", "Telur", "Mie"]

checkout("Buku");
// Output: Jumlah item: 1
// Output: Daftar belanja: ["Buku"]

checkout("A", "B", "C", "D", "E");
// Output: Jumlah item: 5
// Output: Daftar belanja: ["A", "B", "C", "D", "E"]