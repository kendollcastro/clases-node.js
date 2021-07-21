//Esta capa de servicio nos va a permitir conectarnos con la base de datos

const FavoriteMusic = require('../models/favoriteMusic.model')
const mongoose = require('mongoose')

const favoriteMusicService = {}

async function findUser (idUser) {
    try {
        const user = FavoriteMusic.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null; // ? 
    } catch (e) {
        throw new Error('Error while getting user')
    } 
}

async function createFavoriteMusic (idUser, songs) {
    try {
        const favoriteMusic = new FavoriteMusic ({idUser, songs})
        const newFavoriteMusic = await favoriteMusic.save();
        return newFavoriteMusic;
    } catch (e) {
        throw new Error('Error while save Favorite Music')
    }
}

async function updateFavoriteMusic(user, songs) {
    try {
        user.songs.push(songs.toString()); // dijimos que iba a ser un arreglo de strings
        await user.save();
        return user;
    } catch (e) {
        throw new Error('Error while update Favorite Music');
    }
}

favoriteMusicService.upsertFavoriteMusic = async function ({idUser, songs}) {
    try {
        const user = await findUser(idUser);
        if (user) {
            return await updateFavoriteMusic(user, songs)
        } 

        return await createFavoriteMusic (idUser, songs);
    } catch (e) {
        throw new Error('Error while Favorite Music')
    }
}

module.exports = favoriteMusicService;