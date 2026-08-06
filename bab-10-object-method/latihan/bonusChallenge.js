// Bonus Challenge
const playlist = {
  namaPlaylist: "=== PLAYLIST ===",
  lagu: [],

  tambahLagu: function (judul) {
    this.lagu.push(judul);
  },

  hapusLagu: function (index) {
    if (index >= 0 && index < this.lagu.length) {
      this.lagu.splice(index, 1);
    }
  },

  tampilkanPlaylist: function () {
    console.log(this.namaPlaylist);

    this.lagu.forEach(function (judul, index) {
      console.log(index + 1 + ". " + judul);
    });
  },
};

playlist.tambahLagu("Hymn for the Weekend");
playlist.tambahLagu("Numb");

playlist.tampilkanPlaylist();