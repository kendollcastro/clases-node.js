
const http = require('http')
const url = require('url')
const operation = require('./operation')
const hostname = 'localhost' //Configuramos el hostname
const port = 4000 //Configuramos el puerto

const server = http.createServer((req, res,) => { //res (palabra reversada, parametros que vamos a enviar al usuario). req
    const pathUrl = url.parse(req.url, true)  //parse, permite traer la informacion que esta en el url
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write(`El resultado es: ${operation.sumar(pathUrl.query.a, pathUrl.query.b)}`) //Query Trae los argumentos de la url 
    res.end()
})

server.listen(port, hostname, () => {
    console.log( `Server running at http://${hostname}:${port}`)//Imprime el console.log cuando comienza a escuchar
})

//Parametro = Caracteristica o valor que va en el url despues del signo ? 