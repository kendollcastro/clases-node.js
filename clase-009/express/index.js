const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ 
    type:'application/x-www-form-urlencoded',	
    extended: true,
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))  //Dirname: da la direccion donde esta ubicado actualmente
})
app.get('/about', (req, res) => { // Lo que est en la ruta es lo lo que se va a mapear en la url
    res.sendFile(path.join(__dirname+'/public/about.html')) // dirname: me da la direccion url de donde estoy ubicado, lo que esta en anaranjado es el archivo donde esta ubicado
})


/*     console.log(req.body); //Va a traer la informacion del body
    res.send('Hola Mundo...');
})
app.post('/', (req, res) => { */

app.listen(3501);