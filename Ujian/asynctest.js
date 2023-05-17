console.log('mulai');

const {log} = require('console');
const fs = require('fs');
const data = fs.readFileSync('kuis.txt', 'utf8').split(",");
    data.sort((a,b) => a-b);

    fs.writeFileSync("hasil.txt",data.join());
    console.log(data);

console.log('akhir');