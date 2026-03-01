const express = require('express')
const ClienteController = require('../controllers/ClienteController')

module.exports = (ClienteController) => {
    const router = express.Router()

    router.post('/', ClienteController.criar)
    router.get('/', ClienteController.listar)
    router.get('/', ClienteController.buscarPorId)
    router.delete('/', ClienteController.excluir)

    return router
}