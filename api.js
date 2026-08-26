function dapatkanLokasi() {
  if (!navigator.geolocation) {
    console.log("Geolocation tidak didukung browser ini.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (posisi) {
      // Berhasil mendapatkan lokasi
      const lat = posisi.coords.latitude;
      const lng = posisi.coords.longitude;
      const akur = posisi.coords.accuracy;

      console.log("Lintang :", lat);
      console.log("Bujur   :", lng);
      console.log("Akurasi :", akur, "meter");
    },
    function (error) {
      // Gagal (izin ditolak, timeout, dll.)
      console.log("Gagal mendapatkan lokasi:", error.message);
    },
    {
      enableHighAccuracy: true, // Gunakan GPS jika tersedia
      timeout: 5000, // Batas waktu 5 detik
      maximumAge: 0, // Jangan gunakan cache lokasi
    },
  );
}

dapatkanLokasi();
