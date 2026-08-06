//  Method Mengubah Properti
const game = {
  pemain: "Bima",
  nyawa: 100,

  terkenaSerangan(damage) {
    this.nyawa -= damage;
  },
};

console.log("Nyawa awal :", game.nyawa);

game.terkenaSerangan(30);

console.log("Nyawa sekarang :", game.nyawa);