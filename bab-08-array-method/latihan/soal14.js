// Challenge Sistem Antrian
let antrian = [];

antrian.push("Budi");
antrian.push("Ani");
antrian.push("Citra");
antrian.shift();
antrian.push("Dedi");
antrian.unshift("Eka");

console.log(" Antrian:");

console.log("1. " + antrian[0]); // "Eka"
console.log("2. " + antrian[1]); // "Ani"
console.log("3. " + antrian[2]); // "Citra"
console.log("4. " + antrian[3]); // "Dedi"