const express = require('express');
const app = express();
const path = require('path');
const { title } = require('process');
const { render } = require('pug');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('index'); //Porque el archivo de pug se llama de manera, no hace falta ponerle la extension .pug
})


app.get('/about', (req, res) => {
    res.render('about', {title:'About', message:'Estas viendo la pagina del about'}); //Porque el archivo de pug se llama de manera, no hace falta ponerle la extension .pug
})

app.listen(3501);