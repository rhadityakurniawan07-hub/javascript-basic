// shift() dan unshift()
let antrian = [
  "Budi",
  "Ani",
  "Joko",
];

let dilayani = antrian.shift("Dewi");
console.log(dilayani); // "Budi"
console.log(antrian); //["Ani", "Joko"]