function buatSession(username) {
  const namaUser = username;
  let isLogin = true;

  return {
    cekStatus() {
      console.log(`User: ${namaUser}`);

      if (isLogin) {
        console.log("Status: Login");
      } else {
        console.log("Status: Logout");
      }

      console.log();
    },



    logout() {
      isLogin = false;
    },

    login() {
      isLogin = true;
      console.log("Login berhasil.");
      console.log();
    }
  };
}


const sessionBudi = buatSession("budi123");
const sessionAni = buatSession("ani456");


sessionBudi.logout();


sessionBudi.cekStatus();
sessionAni.cekStatus();

console.log(sessionBudi.isLogin);
console.log(sessionBudi.username);