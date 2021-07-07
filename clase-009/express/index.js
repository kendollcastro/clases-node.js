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
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/about.html'))
})


/*     console.log(req.body); //Va a traer la informacion del body
    res.send('Hola Mundo...');
})
app.post('/', (req, res) => { */

app.listen(3501);