function buatCounter() {
  let jumlahKlik = 0;

  return function () {
    jumlahKlik++;

    console.log("Jumlah klik:", jumlahKlik);
  };
}

const counter = buatCounter();

counter();
counter();
counter();
counter();
