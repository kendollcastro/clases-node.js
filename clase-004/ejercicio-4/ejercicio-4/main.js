exports.numeros = function(num){
    let array = [];
    for (let i = 0; i < num; i++){
        if(i % 2 === 1){
            array.push(i);
        }
    }
    console.log(array);
}