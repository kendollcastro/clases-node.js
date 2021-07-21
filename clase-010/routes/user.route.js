const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers')

router.post('/user', userController.create);
//Indicarle que traiga los usuarios
router.get('/user', userController.getUsers);


module.exports = router;