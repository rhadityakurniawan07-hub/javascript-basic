const nama = "Budi";

function belajar() {
  const bahasa = "JavaScript";

  if (true) {
    let level = "Pemula";
    console.log(level);
  }
}

// pejelasan: 
// - `nama` adalah variabel global
// - Variabel yang dideklarasikan di luar fungsi atau blok mana pun berada di Global Scope .


// - `bahasa` adalah variabel lokal function `belajar`
// - Variabel yang dideklarasikan dalam suatu fungsi hanya dapat diakses dari dalam fungsi tersebut. 


// - `level` adalah variabel lokal block `if`
// - Variabel yang dideklarasikan menggunakan letatau constdi dalam blok {}hanya dapat diakses di dalam blok tersebut — termasuk blok if, for, dan while.