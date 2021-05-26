console.log("process.argv", process.argv);
let numeros = process.argv.slice(2);
const operacionMedia = require('./ejercicio-1');

operacionMedia.media(numeros);
