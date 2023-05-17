let nilaiMatematika = 70;
let nilaiFisika = 69;
let nilaiKimia = 60;

let rataRata = (nilaiMatematika + nilaiFisika + nilaiKimia) / 3;

if (nilaiMatematika < 0 || nilaiMatematika > 100 ||
    nilaiFisika < 0 || nilaiFisika > 100 ||
    nilaiKimia < 0 || nilaiKimia > 100) {
  console.log("Nilai tidak valid");
} else {
  if (rataRata >= 80) {
    console.log("Selamat, anda lulus dengan baik!");
  } else if (rataRata >= 60 && rataRata  <=80 ) {
    console.log("Anda lulus");
  } else {
    console.log("Anda tidak lulus");
  }
}


const angkaHari = 1

switch (angkaHari) {
    case 1 :
        console.log("Sunday")
        break
    case 2 :
        console.log("Monday")
        break
    case 3 :
        console.log("Tuesday")
        break
    case 4 :
        console.log("Wednesday")
        break
    case 5 :
        console.log("Thursday")
        break
    case 6 :
        console.log("Friday")
        break
    case 7 :
        console.log("Saturday")
        break
    default :
        console.log("Input tidak valid!!!")
        break
}

const angka = 2

const hasilTernary = angka > 0? 'positif ' : (angka < 0? 'negatif': 'nol' )

console.log(hasilTernary)