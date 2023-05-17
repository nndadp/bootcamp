for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
 

function hitungRataRata(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    }
    return total / arr.length;
    }
    const nilai = [90, 80, 95, 70, 85];
    const rataRata = hitungRataRata(nilai);
    console.log("Nilai rata-rata:", rataRata);


    
    function countCapitalLetters(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
          if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
          }
        }
        return count;
      }
      
      const myString = "Ini adalah STRING contoh DENGAN huruf KAPITAL";
      const result = countCapitalLetters(myString);
      console.log(`Jumlah huruf kapital: ${result}`);
      