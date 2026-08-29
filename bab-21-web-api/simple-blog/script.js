let users = [];
let favorit = JSON.parse(localStorage.getItem("favoritUsers")) || [];

const daftarPengguna = document.getElementById("daftarPengguna");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const inputPencarian = document.getElementById("inputPencarian");
const tombolTema = document.getElementById("tombolTema");
const detailPengguna = document.getElementById("detailPengguna");
const modalForm = document.getElementById("modalForm");
const formPengguna = document.getElementById("formPengguna");
const tombolTambah = document.getElementById("tombolTambah");
const tombolBatalModal = document.getElementById("tombolBatalModal");

function ambilIdDariURL() {
    const bagianURL = location.pathname.split("/"); 
    const kataKunci = bagianURL[1]; 
    const id = Number(bagianURL[2]); 

    if (kataKunci === "user" && !isNaN(id) && id > 0) {
        return id;
    }
    return null;
}

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

function setStatus(isLoading = false, errPesan = "") {
    loading.style.display = isLoading ? "block" : "none";
    error.style.display = errPesan ? "block" : "none";
    error.textContent = errPesan;
}

function simpanKeStorage() {
    localStorage.setItem("usersData", JSON.stringify(users));
}

async function ambilDataUsers() {
    const cache = localStorage.getItem("usersData");
    
    if (cache) {
        try {
            users = JSON.parse(cache);
            tampilkanUsers(users);
            return;
        } catch (e) {
            console.error("Cache rusak:", e);
        }
    }

    setStatus(true);
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Gagal mengambil data");
        
        users = await response.json();
        simpanKeStorage();
        tampilkanUsers(users);
    } catch (err) {
        setStatus(false, "Maaf, data pengguna gagal dimuat. Cek koneksi internet kamu.");
    } finally {
        loading.style.display = "none";
    }
}

function tampilkanUsers(data) {
    daftarPengguna.innerHTML = "";

    if (!data.length) {
        daftarPengguna.innerHTML = "<p>Tidak ada pengguna yang ditemukan.</p>";
        return;
    }

    data.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p class="company">Perusahaan: ${user.company?.name || "-"}</p>
            <button class="favorite-button">${favorit.includes(user.id) ? "★" : "☆"}</button>
            <div class="action-buttons">
                <button class="edit-button">✏️ Edit</button>
                <button class="delete-button">🗑️ Hapus</button>
            </div>
        `;

        card.addEventListener("click", () => bukaDetail(user.id));
        
        card.querySelector(".favorite-button").addEventListener("click", (e) => {
            e.stopPropagation();
            ubahFavorit(user.id);
        });

        card.querySelector(".edit-button").addEventListener("click", (e) => {
            e.stopPropagation();
            bukaModalEdit(user);
        });

        card.querySelector(".delete-button").addEventListener("click", (e) => {
            e.stopPropagation();
            hapusPengguna(user.id);
        });

        daftarPengguna.appendChild(card);
    });
}

function filterUsers(keyword) {
    const kata = keyword.toLowerCase();
    return users.filter(user => user.name.toLowerCase().includes(kata));
}

inputPencarian.addEventListener("input", () => {
    tampilkanUsers(filterUsers(inputPencarian.value));
});

function ubahFavorit(id) {
    favorit = favorit.includes(id) 
        ? favorit.filter(item => item !== id) 
        : [...favorit, id];

    localStorage.setItem("favoritUsers", JSON.stringify(favorit));
    tampilkanUsers(filterUsers(inputPencarian.value));
}

async function bukaDetail(id, pushState = true) {
    setStatus(true);
    let user = users.find(u => u.id === id);

    if (!user) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (response.ok) user = await response.json();
        } catch (err) {
            console.error(err);
        }
    }
    setStatus(false);

    if (!user) {
        setStatus(false, "Detail pengguna tidak ditemukan.");
        return;
    }

    if (pushState) {
        history.pushState({ userId: id }, "", `/user/${id}`);
    }

    daftarPengguna.parentElement.style.display = "none";
    detailPengguna.innerHTML = `
        <div class="card detail-card">
            <h2>Detail Pengguna</h2>
            <p><strong>Nama:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Alamat:</strong> ${user.address ? `${user.address.street}, ${user.address.city}` : "-"}</p>
            <p><strong>Telepon:</strong> ${user.phone || "-"}</p>
            <p><strong>Website:</strong> ${user.website || "-"}</p>
            <p><strong>Perusahaan:</strong> ${user.company?.name || "-"}</p>
            <button class="back-button" onclick="history.back()">← Kembali</button>
        </div>
    `;
}

window.addEventListener("popstate", () => {
    const userId = ambilIdDariURL();

    if (userId) {
        bukaDetail(userId, false);
    } else {
        daftarPengguna.parentElement.style.display = "block";
        detailPengguna.innerHTML = "";
    }
});

tombolTambah.addEventListener("click", () => {
    document.getElementById("modalJudul").textContent = "Tambah Pengguna Baru";
    formPengguna.reset();
    document.getElementById("userIdInput").value = "";
    modalForm.classList.add("active");
});

function bukaModalEdit(user) {
    document.getElementById("modalJudul").textContent = "Edit Pengguna";
    document.getElementById("userIdInput").value = user.id;
    document.getElementById("namaInput").value = user.name;
    document.getElementById("emailInput").value = user.email;
    document.getElementById("perusahaanInput").value = user.company?.name || "";
    modalForm.classList.add("active");
}

tombolBatalModal.addEventListener("click", () => {
    modalForm.classList.remove("active");
});

formPengguna.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus(true);

    const id = Number(document.getElementById("userIdInput").value);
    const payload = {
        name: document.getElementById("namaInput").value,
        email: document.getElementById("emailInput").value,
        company: { name: document.getElementById("perusahaanInput").value }
    };

    try {
        if (id) {
            // PUT: Update Data
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const dataBaru = await res.json();
            
            const index = users.findIndex(u => u.id === id);
            if (index !== -1) users[index] = { ...users[index], ...dataBaru };
        } else {
            // POST: Tambah Data Baru
            const res = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const dataBaru = await res.json();
            
            users.unshift({ ...dataBaru, id: Date.now() });
        }

        simpanKeStorage();
        tampilkanUsers(filterUsers(inputPencarian.value));
        modalForm.classList.remove("active");
    } catch (err) {
        setStatus(false, "Gagal menyimpan data ke API.");
    } finally {
        setStatus(false);
    }
});

async function hapusPengguna(id) {
    if (confirm("Apakah Anda yakin ingin menghapus pengguna ini?")) {
        setStatus(true);
        try {
            await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "DELETE"
            });
            
            users = users.filter(user => user.id !== id);
            simpanKeStorage();
            tampilkanUsers(filterUsers(inputPencarian.value));
        } catch (err) {
            setStatus(false, "Gagal menghapus data dari API.");
        } finally {
            setStatus(false);
        }
    }
}

ambilDataUsers();

const initialUserId = ambilIdDariURL();
if (initialUserId) {
    bukaDetail(initialUserId, false);
}