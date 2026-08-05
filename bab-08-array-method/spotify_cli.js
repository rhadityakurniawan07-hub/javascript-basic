const prompt = require("prompt-sync")();

let playlist = [];
let pilihan;

do {
    console.clear();
    console.log("==============================");
    console.log("🎵 Welcome to CLI Spotify");
    console.log("==============================");
    console.log("1. Lihat Playlist");
    console.log("2. Tambah Lagu");
    console.log("3. Hapus Lagu");
    console.log("4. Cari Lagu");
    console.log("5. Keluar");

    pilihan = prompt("\nPilih menu (1-5): ");

    if (pilihan === "1") {
        console.clear();
        console.log("===== PLAYLIST =====");

        if (playlist.length === 0) {
            console.log("📂 Playlist masih kosong.");
        } else {
            for (let i = 0; i < playlist.length; i++) {
                console.log(`${i + 1}. ${playlist[i]}`);
            }
        }

        prompt("\nTekan Enter untuk kembali...");
    }

    else if (pilihan === "2") {
        console.clear();

        const lagu = prompt("Masukkan judul lagu: ");

        if (lagu === "") {
            console.log("❌ Judul lagu tidak boleh kosong.");
        } else {
            playlist.push(lagu);
            console.log(`✅ "${lagu}" berhasil ditambahkan.`);
        }

        prompt("\nTekan Enter untuk kembali...");
    }

    else if (pilihan === "3") {
        console.clear();

        if (playlist.length === 0) {
            console.log("Playlist masih kosong.");
        } else {

            console.log("===== PLAYLIST =====");

            for (let i = 0; i < playlist.length; i++) {
                console.log(`${i + 1}. ${playlist[i]}`);
            }

            let nomor = Number(prompt("\nMasukkan nomor lagu yang ingin dihapus: "));

            if (nomor >= 1 && nomor <= playlist.length) {

                let laguHapus = playlist[nomor - 1];

                playlist.splice(nomor - 1, 1);

                console.log(`✅ "${laguHapus}" berhasil dihapus.`);

            } else {
                console.log("❌ Nomor tidak valid.");
            }
        }

        prompt("\nTekan Enter untuk kembali...");
    }

    else if (pilihan === "4") {
        console.clear();

        if (playlist.length === 0) {
            console.log("Playlist masih kosong.");
        } else {

            const cari = prompt("Masukkan judul lagu: ");

            let ditemukan = false;

            for (let i = 0; i < playlist.length; i++) {

                if (playlist[i].toLowerCase().includes(cari.toLowerCase())) {

                    console.log("\n✅ Lagu ditemukan!");
                    console.log(`${i + 1}. ${playlist[i]}`);

                    ditemukan = true;
                }
            }

            if (!ditemukan) {
                console.log("❌ Lagu tidak ditemukan.");
            }
        }

        prompt("\nTekan Enter untuk kembali...");
    }

    else if (pilihan === "5") {
        console.clear();
        console.log("👋 Terima kasih telah menggunakan CLI Spotify.");
    }

    else {
        console.log("❌ Menu tidak tersedia.");
        prompt("\nTekan Enter untuk kembali...");
    }

} while (pilihan !== "5");