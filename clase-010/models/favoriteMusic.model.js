//Este models solo va a manejar la estructura del usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteMusicSchema = mongoose.Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        required: true
    }, 
    songs: [String]
}, {versionKey: false});

const favoriteMusicSchema = mongoose.model('FavoriteMusic', FavoriteMusicSchema) // Para decirle como va a estar construido
module.exports = favoriteMusicSchema; //Exportamos el modulo