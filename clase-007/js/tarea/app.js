const functionRequire = require('./index')
const fruitUser = process.argv.slice(2);
console.log("process.argv",process.argv);

console.log(functionRequire.compareFruits(fruitUser));