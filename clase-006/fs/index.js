const fs = require('fs') //Siempre importa un modulo de fs de node
let path = process.cwd(); //Devuelve la ruta actual donde nos encontramos

const user = {
    "id": 1,
    "name": "Jonh Doe",
    "age": 22
};


//Conver JSON object to string
const data = JSON.stringify(user);

fs.writeFile(`${path}/holamundo.json`, data, function(err, data){
    if(err)
        return console.error(err)
    console.log("Archivo creado y salvado")
});

//Crear si no existe, y si existe entonces agrega el contenido al final
fs.appendFile(`${path}/holamundo.txt`, "Hola Mundo\ny grupo ", function(err, data){
    if(err)
        return console.error(err)
    console.log("Se ha actualizado el archivo")
});

/*//Lee el archivo
fs.readFile(`${path}/holamundo.txt`, 'utf8', function(err, data){
    if(err)
        return console.error(err)
    console.log(JSON.stringify(data))
    console.log(data)
})*/


//Me permite abrir un archivo
fs.open(`${path}/nuevoarchivo.txt`, 'w', function(err, fd){
    if(err)
        return console.error(err)
    fs.write(fd, 'Esta es la primera linea', 'utf8', function(err){
        if(err)
            return console.error(err)
    })
})

//Me permite eliminar o borrar un archivo
fs.unlink(`${path}/nuevoarchivo.txt`, function(err){
    if(err)
        return console.error(err)
    console.log('Se ha eliminado el archivo')
})