const fs = require('fs')
let path = process.cwd();

//Lee el archivo
fs.readFile(`${path}/tarea.txt`, 'utf8', function(err, data){
    if(err)
        return console.error(err)
    
    const regularExpression = /\r?\n/; //Usamos esta expresion para convertir el string en un array
    const newArray = data.split(regularExpression); // Se crea un nuevo arreglo usando el metodo .split y usando como parámetro la expresion regular

    for(let i = 1; i < newArray.length; i++){ //Recorreo el nuevo arreglo
        const information = newArray[i].split(';'); //Separa el arreglo cuando encuentre un ;

        //Se añade el string, en el cual se llaman las pociones del arreglo con la información solicitada
        fs.appendFile('disney.txt', `Película: ${information[0]}\nAño: ${information[1]}\nGénero: ${information[2]}\n \n`, function(err){
            if(err)
                return console.error(err)
        })
    }
})

