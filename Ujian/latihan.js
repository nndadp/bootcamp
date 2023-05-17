
function Recursive(n) { // looping
    if (n === 0) {
      return 1;
    } else {
      return n * Recursive(n - 1);
    }
  }
  
  const argInput = process.argv[2]; //angka dalam procees exit tuh cuma buat ngasih tau kode
  const number = parseInt(argInput); 
 
    const factorial = Recursive(number); //menyimpan hasil 
    console.log(`Faktorial dari ${number} adalah: ${factorial}`); //log yg ini untuk mencetak argumen yg udah di input
  
  

