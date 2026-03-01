const express = require('express')
//const UsuarioController = require('../controllers/UsuarioController')


module.exports = (usuarioController) => {
    const router = express.Router()

    router.post('/cadastrar', usuarioController.cadastrar)
    router.post('/login', usuarioController.login)

    return router
}