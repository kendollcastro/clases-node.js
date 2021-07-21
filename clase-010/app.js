require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // Para conectar con la base de datos
const userRoute = require('./routes/user.route');
const app = express();


const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL) //esto nos va a ayudar a conectar con la base de datos
const db = mongoose.connection;
db.on('error', error => console.log(error)); // on es un evento, en el cual nos va a imprimir si sale algo malo imrpima error
db.once('open', ()=> console.log('connection to db established'))

app.use(express.json()); // Vamos a traer lo que venga del body como un json
app.use(express.urlencoded({ // utilizamos el use, para validar esa informacion, hacemos una validacion previa, por ejemplo el email que sea un formato correcto
    type:'application/x-www-form-urlencoded', // Va a funcionar, cuando recibe un requete del usuario, cuando el backend responde, intersecta la informacion com tipo json
    extended: true,
}))

//Para que realize una acciones, hay que crear controladores.
app.use('/', userRoute);

app.use('*', (req, res) => { //* cualquier path que no sea el de arriba por ejemplo /user
    res.status(404) //Necistamos devolver el status code.
    res.send("Path cannot found")
})

app.listen(PORT, HOSTNAME, ()=>{
    console.log(`Server running on ${HOSTNAME}:${PORT}`);
})
