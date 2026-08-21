(function () {
    "use strict";
    
    const form = document.querySelector("#formPemesanan");
    const namaInput = document.querySelector("#nama");
    const emailInput = document.querySelector("#email");
    const filmInput = document.querySelector("#film");
    const pesan = document.querySelector("#pesan");
    const daftarPesanan = document.querySelector("#daftarPesanan");
    const tombolReset = document.querySelector(".btn-reset");
    const tombolHapusSemua = document.querySelector(".btn-hapus-semua");


    let daftar = [];

    function validasiNama(nama) {
        if (nama === "") {
            return "Nama tidak boleh kosong.";
        }

        return "";
    }


    function validasiEmail(email) {
        if (email === "") {
            return "Email tidak boleh kosong.";
        }

        if (!email.includes("@")) {
            return "Email harus mengandung @.";
        }

        return "";
    }


    function validasiFilm(film) {
        if (film === "") {
            return "Judul film harus dipilih.";
        }

        return "";
    }


    function tampilkanPesan(teks, tipe) {
        pesan.textContent = teks;

        pesan.classList.remove("pesan-error");
        pesan.classList.remove("pesan-sukses");

        if (tipe === "error") {
            pesan.classList.add("pesan-error");
        } else {
            pesan.classList.add("pesan-sukses");
        }
    }

    function resetPesan() {
        pesan.textContent = "";
        pesan.classList.remove("pesan-error");
        pesan.classList.remove("pesan-sukses");
    }


    function tampilkanDaftar() {

        daftarPesanan.innerHTML = "";

        if (daftar.length === 0) {

            const kosong = document.createElement("p");

            kosong.classList.add("pesanan-kosong");

            kosong.textContent = "Belum ada pesanan tiket.";

            daftarPesanan.appendChild(kosong);

            return;
        }

        daftar.forEach(function (pesanan, index) {

            const div = document.createElement("div");

            div.classList.add("pesanan");

            div.innerHTML = `
                <p>
                    <strong>Nama:</strong>
                    ${pesanan.nama}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${pesanan.email}
                </p>

                <p>
                    <strong>Film:</strong>
                    ${pesanan.film}
                </p>

                <button 
                    class="btn-hapus" 
                    data-index="${index}">
                    Hapus
                </button>
            `;

            daftarPesanan.appendChild(div);
        });
    }
    function tambahPesanan(nama, email, film) {

        const pesananBaru = {
            nama: nama,
            email: email,
            film: film
        };

        daftar.push(pesananBaru);

        tampilkanDaftar();
    }

    function hapusPesanan(index) {

        daftar.splice(index, 1);

        tampilkanDaftar();

        tampilkanPesan(
            "Pesanan berhasil dihapus.",
            "sukses"
        );
    }


    function hapusSemuaPesanan() {

        if (daftar.length === 0) {

            tampilkanPesan(
                "Belum ada pesanan untuk dihapus.",
                "error"
            );

            return;
        }


        daftar = [];

        tampilkanDaftar();

        tampilkanPesan(
            "Semua pesanan berhasil dihapus.",
            "sukses"
        );
    }


    function resetForm() {

        form.reset();

        resetPesan();
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const nama = namaInput.value.trim();
        const email = emailInput.value.trim();
        const film = filmInput.value.trim();


        const errorNama = validasiNama(nama);

        if (errorNama !== "") {

            tampilkanPesan(errorNama, "error");

            namaInput.focus();

            return;
        }

        const errorEmail = validasiEmail(email);

        if (errorEmail !== "") {

            tampilkanPesan(errorEmail, "error");

            emailInput.focus();

            return;
        }

        const errorFilm = validasiFilm(film);

        if (errorFilm !== "") {

            tampilkanPesan(errorFilm, "error");

            filmInput.focus();

            return;
        }


        tambahPesanan(
            nama,
            email,
            film
        );

        tampilkanPesan(
            "Tiket berhasil dipesan!",
            "sukses"
        );

        form.reset();
    });

    daftarPesanan.addEventListener("click", function (event) {

        if (event.target.classList.contains("btn-hapus")) {

            const index = Number(
                event.target.dataset.index
            );

            hapusPesanan(index);
        }
    });

    tombolHapusSemua.addEventListener(
        "click",
        function () {

            hapusSemuaPesanan();

        }
    );


    tombolReset.addEventListener(
        "click",
        function () {

            resetForm();

        }
    );


    tampilkanDaftar();

})();