const username = "  BUDI123  ";

const cleanedUsername = username.trim().toLowerCase();
console.log("username", cleanedUsername);

if (cleanedUsername.length >= 8) {
  console.log("Username valid");
} else {
  console.log("Username tidak valid");
}