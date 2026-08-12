const namaUser = "Budi";

function prosesLogin() {
  const tokenSesi = "abc123";

  console.log("Login berhasil");
  console.log("Token:", tokenSesi);
  
  console.log("User di dalam fungsi:", namaUser);
}

prosesLogin();

console.log("User di luar fungsi:", namaUser);

// penjelasan:
// Variabel tokenSesi hanya dapat diakses di dalam fungsi prosesLogin, sehingga jika kita mencoba mengaksesnya di luar fungsi, akan terjadi error. 
// Namun, variabel namaUser dapat diakses di dalam dan di luar fungsi karena berada di scope global.