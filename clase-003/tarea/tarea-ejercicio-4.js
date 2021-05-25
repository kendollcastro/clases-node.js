
exports.operaciones = function(opcion, num1, num2) {
    if(opcion === 'sumar'){
        return num1 + num2
    } else if (opcion === 'restar') {
        return num1 - num2
    } else if (opcion === 'multiplicar') {
        return num1 * num2
    } else if (opcion === 'dividir') {

        if(num1 || num2 === 0) {
            return 'Error'
        }

        return num1 / num2

    } else {
        return 'Eso no es una operación'
    }
}


/*
function operacionRestar(opcion, num1, num2) {
    if(opcion === 'restar'){
        return num1 - num2
    } else {
        'Error!'
    }
}

function operacionMultiplicar(opcion, num1, num2) {
    if(opcion === 'multiplicar'){
        return num1 * num2
    } else {
        'Error!'
    }
}

function operacionDivision(opcion, num1, num2) {
    if(opcion === 'dividir'){
        return num1 / num2
    } else {
        'Error!'
    }
}
*/

