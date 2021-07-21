//Esta capa de servicio nos va a permitir conectarnos con la base de datos

const User = require('../models/user.model')

const userService = {}

userService.createUser = async function ({name, email}) {
    try {
        //manejar errores, capturar los errores
        const user = new User({name, email});
        const newUser = await user.save(); //await son promesas, para que se ejecutara de forma asincrona
        return newUser;

    } catch(e) {
        throw new Error ('Error while save user')
        //El controlador tiene que devolverle el error, por ejemplo 404
    }
}
userService.getUsers = async function (){
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error ('Error while Paginating Users')
    }
}

module.exports = userService;