const prompt = require("prompt-sync")();

let inventaris = [];
let idBarang = 1;
let pilihan;

do {
    console.clear();

    console.log("=================================");
    console.log("      SISTEM INVENTARIS");
    console.log("=================================");
    console.log("1. Lihat Barang");
    console.log("2. Tambah Barang");
    console.log("3. Edit Barang");
    console.log("4. Hapus Barang");
    console.log("5. Cari Barang");
    console.log("6. Keluar");

    pilihan = prompt("\nPilih menu : ");

    switch (pilihan) {

        // ===============================
        // LIHAT BARANG
        // ===============================
        case "1":

            console.clear();

            if (inventaris.length === 0) {

                console.log("Inventaris masih kosong.");

            } else {

                console.log("============================================");
                console.log("ID | Nama Barang | Stok");
                console.log("============================================");

                for (let i = 0; i < inventaris.length; i++) {

                    console.log(
                        `${inventaris[i].id} | ${inventaris[i].nama} | ${inventaris[i].stok}`
                    );

                }

            }

            prompt("\nTekan Enter...");
            break;

        // ===============================
        // TAMBAH BARANG
        // ===============================
        case "2":

            console.clear();

            let nama = prompt("Nama Barang : ");
            let stok = Number(prompt("Stok Barang : "));

            inventaris.push({
                id: idBarang,
                nama: nama,
                stok: stok
            });

            console.log("\nBarang berhasil ditambahkan.");

            idBarang++;

            prompt("\nTekan Enter...");
            break;

        // ===============================
        // EDIT BARANG
        // ===============================
        case "3":

            console.clear();

            if (inventaris.length === 0) {

                console.log("Belum ada barang.");

            } else {

                let idEdit = Number(prompt("Masukkan ID Barang : "));

                let barang = inventaris.find(item => item.id === idEdit);

                if (barang) {

                    barang.nama = prompt("Nama baru : ");
                    barang.stok = Number(prompt("Stok baru : "));

                    console.log("\nBarang berhasil diupdate.");

                } else {

                    console.log("ID tidak ditemukan.");

                }

            }

            prompt("\nTekan Enter...");
            break;

        // ===============================
        // HAPUS BARANG
        // ===============================
        case "4":

            console.clear();

            if (inventaris.length === 0) {

                console.log("Belum ada barang.");

            } else {

                let idHapus = Number(prompt("Masukkan ID Barang : "));

                let index = inventaris.findIndex(item => item.id === idHapus);

                if (index !== -1) {

                    inventaris.splice(index, 1);

                    console.log("\nBarang berhasil dihapus.");

                } else {

                    console.log("ID tidak ditemukan.");

                }

            }

            prompt("\nTekan Enter...");
            break;

        // ===============================
        // CARI BARANG
        // ===============================
        case "5":

            console.clear();

            let keyword = prompt("Masukkan nama barang : ");

            let hasil = inventaris.filter(item =>
                item.nama.toLowerCase().includes(keyword.toLowerCase())
            );

            if (hasil.length === 0) {

                console.log("Barang tidak ditemukan.");

            } else {

                console.log("\nHasil Pencarian");

                for (let i = 0; i < hasil.length; i++) {

                    console.log(
                        `${hasil[i].id}. ${hasil[i].nama} (Stok : ${hasil[i].stok})`
                    );

                }

            }

            prompt("\nTekan Enter...");
            break;

    }

} while (pilihan !== "6");

console.clear();
console.log("Terima kasih.");