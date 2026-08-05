const prompt = require("prompt-sync")();

let antrian = [];
let nomorBerikutnya = 1;
let pilihan;

do {
    console.clear();
    console.log("================================");
    console.log("      SISTEM ANTRIAN CLI");
    console.log("================================");
    console.log("1. Admin");
    console.log("2. Pelanggan");
    console.log("3. Keluar");

    pilihan = prompt("\nPilih menu: ");

    // ================= ADMIN =================
    if (pilihan === "1") {

        let menuAdmin;

        do {
            console.clear();

            console.log("===== MENU ADMIN =====");
            console.log("1. Lihat Antrian");
            console.log("2. Tambah Antrian");
            console.log("3. Panggil Antrian");
            console.log("4. Hapus Antrian");
            console.log("5. Kembali");

            menuAdmin = prompt("\nPilih menu: ");

            switch (menuAdmin) {

                case "1":

                    console.clear();

                    if (antrian.length === 0) {
                        console.log("Belum ada antrian.");
                    } else {

                        console.log("===== DAFTAR ANTRIAN =====");

                        for (let i = 0; i < antrian.length; i++) {
                            console.log(`${i + 1}. A-${antrian[i]}`);
                        }
                    }

                    prompt("\nTekan Enter...");
                    break;

                case "2":

                    antrian.push(nomorBerikutnya);

                    console.log(`Nomor A-${nomorBerikutnya} berhasil ditambahkan.`);

                    nomorBerikutnya++;

                    prompt("\nTekan Enter...");
                    break;

                case "3":

                    if (antrian.length === 0) {
                        console.log("Tidak ada antrian.");
                    } else {

                        let dipanggil = antrian.shift();

                        console.log(`Memanggil nomor A-${dipanggil}`);
                    }

                    prompt("\nTekan Enter...");
                    break;

                case "4":

                    if (antrian.length === 0) {
                        console.log("Tidak ada antrian.");
                    } else {

                        console.log("Daftar Antrian:");

                        for (let i = 0; i < antrian.length; i++) {
                            console.log(`${i + 1}. A-${antrian[i]}`);
                        }

                        let nomor = Number(prompt("Nomor urut yang ingin dihapus: "));

                        if (nomor >= 1 && nomor <= antrian.length) {

                            let hapus = antrian[nomor - 1];

                            antrian.splice(nomor - 1, 1);

                            console.log(`A-${hapus} berhasil dihapus.`);
                        } else {
                            console.log("Nomor tidak valid.");
                        }
                    }

                    prompt("\nTekan Enter...");
                    break;

            }

        } while (menuAdmin !== "5");
    }

    // ================= PELANGGAN =================
    else if (pilihan === "2") {

        console.clear();

        let nomorSaya = nomorBerikutnya;

        antrian.push(nomorBerikutnya);

        console.log("================================");
        console.log("Nomor Antrian Anda");
        console.log(`          A-${nomorSaya}`);
        console.log("================================");

        nomorBerikutnya++;

        console.log(`Total yang menunggu : ${antrian.length}`);

        prompt("\nTekan Enter...");
    }

} while (pilihan !== "3");

console.log("\nTerima kasih.");