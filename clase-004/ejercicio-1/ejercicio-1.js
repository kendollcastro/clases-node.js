let resultado = 0;

function numerosPositivos(numeros){
    let media = 0;
    for(let i = 0; i <numeros.length; i++){
        if(Math.sign(Number(numeros[i])) === 1){
            media += Number(numeros[i]);
        }
    }
    resultado = media / numeros.length;
    return resultado
}

function numerosNegativos(numeros){
    let media = 0;
    for(let i = 0; i <numeros.length; i++){
        if(Math.sign(Number(numeros[i])) === -1){
            media += Number(numeros[i]);
        }
    }
    resultado = media / numeros.length;
    return resultado
}

exports.media = function(numeros){
    console.log(numerosPositivos(numeros));
    console.log(numerosNegativos(numeros));
}