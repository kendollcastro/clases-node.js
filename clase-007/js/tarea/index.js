exports.compareFruits = function(fruitUser){
    let fruits = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango'];
    let status = false;

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === fruitUser.toString()) {
            status = true;
        }
    }
    if (status == true) {
        console.log('La fruta si está en la lista');
    } else {
        console.log('La fruta no está en la lista');
    }
}