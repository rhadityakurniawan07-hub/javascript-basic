// Bonus Challenge - Mini Playlist Musik
let playlist = [];

playlist.push("Lagu A");
playlist.push("Lagu B");
playlist.push("Lagu C");
playlist.push("Lagu D");
playlist.push("Lagu E");
playlist.pop();
playlist.unshift("Lagu Pembuka");

console.log("=== Playlist Saya ===\n");

for (let i = 0; i < playlist.length; i++) {
  console.log(`${i + 1}. ${playlist[i]}`);
}

console.log(`\nTotal Lagu : ${playlist.length}`);