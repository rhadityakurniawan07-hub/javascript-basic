const santri = {
    nama: "Budi Santoso",
    kelas: "XI RPL",
    status: "Aktif"
};


const aktivitas = [
    "Login ke aplikasi",
    "Membaca materi JavaScript",
    "Mengerjakan latihan",
    "Mengumpulkan tugas"
];


const nama = document.getElementById("nama");
const kelas = document.getElementById("kelas");
const status = document.getElementById("status");
const daftarAktivitas = document.getElementById("daftarAktivitas");


nama.textContent = santri.nama;
kelas.textContent = santri.kelas;
status.textContent = santri.status;


function tampilkanAktivitas() {

    daftarAktivitas.innerHTML = "";

    aktivitas.forEach(function (item, index) {

        const li = document.createElement("li");

        const teks = document.createElement("span");
        teks.textContent = item;

        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";

        tombolHapus.addEventListener("click", function () {

            aktivitas.splice(index, 1);

            tampilkanAktivitas();
        });

        li.appendChild(teks);
        li.appendChild(tombolHapus);

        daftarAktivitas.appendChild(li);
    });
}

tampilkanAktivitas();