const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers')

router.post('/user', userController.create);
//Indicarle que traiga los usuarios
router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getUser);//Le definimos la ruta, despues de el */* el va a recibir algo que es el id
router.put('/user/:id', userController.updateUser);

module.exports = router;