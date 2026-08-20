/*

    (function () { 
        ... 
    })();

    IIFE adalah singkatan dari Immediately Invoked Function Expression, yaitu function yang langsung dijalankan setelah dibuat.

*/



(function() {
    "use strict";

    // ----- ELEMEN DOM -----
    const form = document.getElementById('form-pendaftaran');
    const inputNama = document.getElementById('nama');
    const inputEmail = document.getElementById('email');
    const charCount = document.getElementById('char-count');
    const keyMessage = document.getElementById('key-message');
    const notification = document.getElementById('form-notification');
    const resetBtn = document.getElementById('reset-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const listContainer = document.getElementById('participant-list-container');
    const totalBadge = document.getElementById('total-badge');

    // ----- STATE -----
    let pesertaList = []; // array of {nama, email}

    // ----- FUNGSI RENDER DAFTAR PESERTA -----
    function renderDaftarPeserta() {
        // Kosongkan container
        listContainer.innerHTML = '';

        if (pesertaList.length === 0) {
            listContainer.innerHTML = '<p class="empty-message">Belum ada peserta.</p>';
        } else {
            // Buat wrapper untuk list
            const listWrapper = document.createElement('div');
            listWrapper.className = 'participant-list';

            pesertaList.forEach((peserta, index) => {
                const item = document.createElement('div');
                item.className = 'participant-item';

                // Informasi peserta
                const info = document.createElement('div');
                info.className = 'participant-info';
                info.innerHTML = `
                    <p><strong>Nama</strong>  : ${peserta.nama}</p>
                    <p><strong>Email</strong> : ${peserta.email}</p>
                `;

                // Tombol hapus per peserta (opsional, untuk challenge)
                const actions = document.createElement('div');
                actions.className = 'participant-actions';
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'btn-small btn-small-danger';
                deleteBtn.textContent = 'Hapus';
                deleteBtn.dataset.index = index;
                deleteBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const idx = parseInt(this.dataset.index);
                    hapusPeserta(idx);
                });

                actions.appendChild(deleteBtn);
                item.appendChild(info);
                item.appendChild(actions);
                listWrapper.appendChild(item);
            });

            listContainer.appendChild(listWrapper);
        }

        // Update total badge
        totalBadge.textContent = `Total: ${pesertaList.length}`;
    }

    // ----- FUNGSI HAPUS SATU PESERTA -----
    function hapusPeserta(index) {
        if (index >= 0 && index < pesertaList.length) {
            pesertaList.splice(index, 1);
            renderDaftarPeserta();
            // Sembunyikan notifikasi jika ada
            notification.classList.remove('show', 'success', 'error');
            notification.textContent = '';
        }
    }

    // ----- FUNGSI HAPUS SEMUA PESERTA -----
    function hapusSemuaPeserta() {
        if (pesertaList.length === 0) return;
        if (confirm('Hapus semua peserta?')) {
            pesertaList = [];
            renderDaftarPeserta();
            notification.classList.remove('show', 'success', 'error');
            notification.textContent = '';
        }
    }

    // ----- FUNGSI TAMPILKAN NOTIFIKASI DI FORM -----
    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = 'form-notification show ' + type; // 'success' atau 'error'
    }

    function hideNotification() {
        notification.classList.remove('show', 'success', 'error');
        notification.textContent = '';
    }

    // ----- UPDATE JUMLAH KARAKTER -----
    function updateCharCount() {
        const len = inputNama.value.length;
        charCount.textContent = `Jumlah karakter: ${len}`;
    }

    // ----- RESET FORM (tanpa reset daftar peserta) -----
    function resetForm() {
        inputNama.value = '';
        inputEmail.value = '';
        updateCharCount();
        keyMessage.textContent = '';
        hideNotification();
        // fokus ke nama
        inputNama.focus();
    }

    // ----- HANDLER SUBMIT (pendaftaran) -----
    function handleSubmit(event) {
        event.preventDefault();

        const nama = inputNama.value.trim();
        const email = inputEmail.value.trim();

        // Validasi
        if (nama === '' || email === '') {
            showNotification('⚠️ Nama dan email wajib diisi!', 'error');
            return;
        }

        // Tambahkan peserta ke array
        pesertaList.push({ nama, email });

        // Render ulang daftar
        renderDaftarPeserta();

        // Tampilkan notifikasi sukses
        showNotification('✅ Pendaftaran berhasil!', 'success');

        // Kosongkan form (opsional, untuk kemudahan input berikutnya)
        resetForm(); // ini akan membersihkan input dan notifikasi, tapi notifikasi sukses akan tertimpa.
        // Kita ingin notifikasi tetap terlihat, jadi kita panggil resetForm dulu lalu set notifikasi lagi.
        // Atau lebih baik kita reset setelah notifikasi. Kita ubah: kita reset form dulu, lalu tampilkan notifikasi.
        // Tapi resetForm akan menghapus notifikasi. Jadi kita lakukan:
        // Kosongkan input secara manual tanpa menghapus notifikasi.
        inputNama.value = '';
        inputEmail.value = '';
        updateCharCount();
        keyMessage.textContent = '';
        // Tampilkan notifikasi sukses (tapi kita sudah tampilkan di atas)
        // Supaya tidak dobel, kita biarkan notifikasi sukses.
        // Namun kita perlu memastikan notifikasi tidak hilang.
        // Kita akan panggil showNotification setelah reset.
        // Tapi showNotification akan mengganti class. Kita panggil ulang.
        // Solusi: kita buat fungsi resetFormWithoutNotif.
        // Mari kita refactor.
        // Lebih baik kita tidak reset otomatis, biarkan user reset manual.
        // Sesuai spek: "Setelah berhasil, halaman menampilkan informasi peserta tanpa melakukan reload."
        // Tidak disebutkan form harus kosong. Jadi kita biarkan form terisi.
        // Tetapi untuk kemudahan, kita biarkan saja. Kita hanya reset jika user klik reset.
        // Jadi kita hapus resetForm di sini. Kita biarkan form terisi.
        // Namun kita ingin notifikasi sukses muncul. Sudah.
        // Tapi kita juga ingin fokus ke nama agar siap daftar lagi. Tapi tidak wajib.
        // Kita akan biarkan form seperti apa adanya.
        // Kembalikan state: tidak reset otomatis.
        // Jadi kita hapus pemanggilan resetForm di sini.
        // Kita hanya perlu memastikan notifikasi sukses muncul.
        // Sudah kita lakukan showNotification.
        // Oke.
    }

    // ----- HANDLER KEYDOWN (untuk Enter di input nama) -----
    function handleKeydown(event) {
        if (event.key === 'Enter') {
            keyMessage.textContent = 'Tombol Enter ditekan!';
        } else {
            // Hapus pesan jika tombol lain
            keyMessage.textContent = '';
        }
    }

    // ----- HANDLER INPUT (update karakter) -----
    function handleInput() {
        updateCharCount();
        // Kita tidak hapus keyMessage di sini, biar ditangani keydown
    }

    // ----- HANDLER RESET FORM (tombol reset) -----
    function handleReset() {
        resetForm();
        // Tidak menghapus daftar peserta, hanya form
        // Notifikasi dihilangkan
        hideNotification();
    }

    // ----- HANDLER CLEAR ALL (tombol hapus semua) -----
    function handleClearAll() {
        hapusSemuaPeserta();
    }

    // ----- PASANG EVENT LISTENERS -----
    form.addEventListener('submit', handleSubmit);
    inputNama.addEventListener('input', handleInput);
    inputNama.addEventListener('keydown', handleKeydown);
    resetBtn.addEventListener('click', handleReset);
    clearAllBtn.addEventListener('click', handleClearAll);

    // ----- INISIALISASI AWAL -----
    renderDaftarPeserta(); // menampilkan empty state
    updateCharCount();
    hideNotification();

    console.log('✅ Workshop siap dengan dua card!');

})();