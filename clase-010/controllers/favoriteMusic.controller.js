const favoriteMusicService = require('../services/favoriteMusic.service')

const FavoriteMusicController = {}

FavoriteMusicController.upsert = async function ( req, res, next ) {
    try {
        const upsertFavoriteMusic = await favoriteMusicService.upsertFavoriteMusic(req.body);
        return res.status(201).json({status: 201, data: upsertFavoriteMusic})
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}

module.exports = FavoriteMusicController;