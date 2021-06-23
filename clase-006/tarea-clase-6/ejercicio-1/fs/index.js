const fs = require('fs');
let path = process.cwd(); //Devuelve la ruta actual donde nos encontramos
//Se crea un arreglo con los datos de los usuario y se agrega un salto de linea
let users = ["nombre: Oliver", " apellido: Brown", " edad: 20","\nnombre: Jack", " apellido: Murphy", " edad: 35","\nnombre: Charlie", " apellido: Rodriguez", " edad: 38","\nnombre: George", " apellido: Smith", " edad: 22","\nnombre: James", " apellido: Anderson", " edad: 23","\nnombre: William", " apellido: Walsh", " edad: 25"]
let arrayToString = users.join(); //Se usó el .join para pasar el array a un string

//Se crea el archivo txt, se le pasa el string con los datos de los usuarios para crear el archivo final
fs.writeFile(`${path}/tarea.txt`, arrayToString, function(err){
    if(err)
        return console.error(err)
})