const nama = "Global";

function luar() {
  const nama = "Luar"; // Function Scope — menutupi variabel global di dalam fungsi ini

  function dalam() {
    const nama = "Dalam"; // Function Scope — menutupi variabel luar di dalam fungsi ini

    console.log(nama); // Output: "Dalam"
  }

  dalam();
  console.log(nama); // Output: "Luar"
}

luar();
console.log(nama); // Output: "Global"