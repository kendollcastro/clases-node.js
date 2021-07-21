const express = require ('express');
const FavoriteMusicController = require('../controllers/favoriteMusic.controller')

const router = express.Router();

router.put('/favorite-music', FavoriteMusicController.upsert)

module.exports = router;