console.log("process.argv",process.argv)
let object = process.argv.slice(2);
let number = Number(object[0]);

const fuctionNamed = require('./main');
fuctionNamed.numeros(number);