//Este models solo va a manejar la estructura del usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
}, {versionKey: false});

const User = mongoose.model('User', userSchema) // Para decirle como va a estar construido
module.exports = User; //Exportamos el modulo