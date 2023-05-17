// async
const fs = require("fs"); //menginpor fs(file sistem) modul built in nodejs

async function readFile(){ //buat ngebaca file yang di import
    try{
        const data = fs.readFileSync("./scrambel.text", { encoding: "utf-8", flag: "r"}); //ngebaca file scarambel.text

        const convert = data.split(",").map(Number); // ngubah string ["1","2"] menjadi "1,2"
        const sort = convert.sort(function(a,b) { // mengurutkan angka dari yang paling kecil
            return a-b;
        });

        const str = await sort.toString();
        const writeStream = fs.createWriteStream("sort.txt"); // membuat file sort txt dan menuliskan jawaban di dalam file sort txt
        writeStream.write(str); // menulis data menjadi string
        writeStream.end();// menutup write yg di atas (?)
        console.log(str); // menampilkan data 
    } catch (error) {
        console.error("Error:", error);
    }
 }
 // output

 console.log("Mulai");

 readFile(); //membaca filenya

 console.log("Akhir");