exports.digit = function(num) {
    if( num >= 100 || num <= 999){
        return 'El número es de tres dígitos'
    } else if(num > 999){
        return 'El numero no es de tres dígitos'
    } else{
        return 'Error'
    }
}
