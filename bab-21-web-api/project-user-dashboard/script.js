let users = [];
let favorit = JSON.parse(localStorage.getItem("favoritUsers")) || [];

const daftarPengguna = document.getElementById("daftarPengguna");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const inputPencarian = document.getElementById("inputPencarian");
const tombolTema = document.getElementById("tombolTema");
const detailPengguna = document.getElementById("detailPengguna");

function tampilkanTema() {
    const dark = localStorage.getItem("tema") === "dark";

    document.body.classList.toggle("dark", dark);

    tombolTema.textContent = dark
        ? "☀️ Mode Terang"
        : "🌙 Mode Gelap";
}

tombolTema.addEventListener("click", () => {
    const dark = document.body.classList.toggle("dark");

    localStorage.setItem("tema", dark ? "dark" : "light");

    tombolTema.textContent = dark
        ? "☀️ Mode Terang"
        : "🌙 Mode Gelap";
});

tampilkanTema();

const tampilkanLoading = () => {
    loading.style.display = "block";
};

const sembunyikanLoading = () => {
    loading.style.display = "none";
};

function tampilkanError(pesan) {
    error.textContent = pesan;
    error.style.display = "block";
}

function sembunyikanError() {
    error.textContent = "";
    error.style.display = "none";
}


async function ambilDataUsers() {
    tampilkanLoading();
    sembunyikanError();

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Gagal mengambil data pengguna.");
        }

        users = await response.json();

    
        localStorage.setItem(
            "usersData",
            JSON.stringify(users)
        );

        tampilkanUsers(users);

    } catch (err) {
        console.error(err);

        if (!users.length) {
            tampilkanError(
                "Maaf, data pengguna tidak dapat dimuat. Periksa koneksi internet kamu."
            );
        }

    } finally {
        sembunyikanLoading();
    }
}

function cekCache() {
    const cache = localStorage.getItem("usersData");

    if (!cache) return;

    try {
    
        users = JSON.parse(cache);

        tampilkanUsers(users);

    } catch (err) {
        console.error("Cache tidak dapat dibaca:", err);

        localStorage.removeItem("usersData");
    }
}

function tampilkanUsers(data) {
    daftarPengguna.innerHTML = "";

    if (!data.length) {
        daftarPengguna.innerHTML =
            "<p>Tidak ada pengguna yang ditemukan.</p>";
        return;
    }

    data.forEach(user => {

        const card = document.createElement("div");
        card.className = "user-card";

        const nama = document.createElement("h3");
        nama.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + user.email;

        const perusahaan = document.createElement("p");
        perusahaan.className = "company";
        perusahaan.textContent =
            "Perusahaan: " + user.company.name;

        const tombolFavorit = document.createElement("button");
        tombolFavorit.className = "favorite-button";

        tombolFavorit.textContent =
            favorit.includes(user.id) ? "★" : "☆";

       
        tombolFavorit.addEventListener("click", event => {
            event.stopPropagation();
            ubahFavorit(user.id);
        });

        
        card.addEventListener("click", () => {
            bukaDetail(user.id);
        });

        card.append(
            nama,
            email,
            perusahaan,
            tombolFavorit
        );

        daftarPengguna.appendChild(card);
    });
}

function ubahFavorit(id) {

    favorit = favorit.includes(id)
        ? favorit.filter(item => item !== id)
        : [...favorit, id];

    localStorage.setItem(
        "favoritUsers",
        JSON.stringify(favorit)
    );

    tampilkanUsers(
        filterUsers(inputPencarian.value)
    );
}

function filterUsers(keyword) {

    const kata = keyword.toLowerCase();

    return users.filter(user =>
        user.name.toLowerCase().includes(kata)
    );
}

inputPencarian.addEventListener("input", () => {

    tampilkanUsers(
        filterUsers(inputPencarian.value)
    );

});

async function bukaDetail(id) {

    tampilkanLoading();
    sembunyikanError();

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + id
        );

        if (!response.ok) {
            throw new Error(
                "Data detail pengguna tidak ditemukan."
            );
        }

        const user = await response.json();

        history.pushState(
            { userId: id },
            "",
            "/user/" + id
        );

        tampilkanDetail(user);

    } catch (err) {

        console.error(err);

        tampilkanError(
            "Maaf, detail pengguna gagal dimuat."
        );

    } finally {

        sembunyikanLoading();

    }
}

function tampilkanDetail(user) {

    daftarPengguna.parentElement.style.display =
        "none";

    detailPengguna.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card detail-card";

    const judul = document.createElement("h2");
    judul.textContent = "Detail Pengguna";

    const data = [
        ["Nama", user.name],
        ["Email", user.email],
        [
            "Alamat",
            `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
        ],
        ["Telepon", user.phone],
        ["Website", user.website],
        ["Perusahaan", user.company.name]
    ];

    card.appendChild(judul);

    data.forEach(([label, value]) => {

        const p = document.createElement("p");

        p.innerHTML =
            `<strong>${label}:</strong> ${value}`;

        card.appendChild(p);

    });

    const tombolKembali = document.createElement("button");

    tombolKembali.className = "back-button";

    tombolKembali.textContent = "← Kembali";

    tombolKembali.addEventListener("click", () => {
        history.back();
    });

    card.appendChild(tombolKembali);

    detailPengguna.appendChild(card);
}
function tampilkanDaftar() {

    daftarPengguna.parentElement.style.display =
        "block";

    detailPengguna.innerHTML = "";

}

window.addEventListener("popstate", () => {

    const cocok =
        location.pathname.match(/^\/user\/(\d+)$/);

    if (cocok) {

        bukaDetailTanpaHistory(
            Number(cocok[1])
        );

    } else {

        tampilkanDaftar();

    }

});


async function bukaDetailTanpaHistory(id) {

    tampilkanLoading();
    sembunyikanError();

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + id
        );

        if (!response.ok) {
            throw new Error(
                "Detail pengguna tidak ditemukan."
            );
        }

        const user = await response.json();

        tampilkanDetail(user);

    } catch (err) {

        console.error(err);

        tampilkanError(
            "Detail pengguna gagal dimuat."
        );

    } finally {

        sembunyikanLoading();

    }

}


function cekURL() {

    const cocok =
        location.pathname.match(/^\/user\/(\d+)$/);

    if (cocok) {

        bukaDetailTanpaHistory(
            Number(cocok[1])
        );

    }

}


cekCache();
ambilDataUsers();
cekURL();