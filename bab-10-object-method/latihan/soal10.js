// Menggunakan this
const hewan = {
  nama: "Kucing",

  bersuara() {
    console.log("Halo, saya adalah " + this.nama );
  },
};

hewan.bersuara()