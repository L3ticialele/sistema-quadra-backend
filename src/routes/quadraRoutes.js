const express = require('express')
const QuadraController = require('../controllers/QuadraController')

module.exports = (quadraController) => {
    const router = express.Router()

    router.post('/', quadraController.criar)
    router.get('/', quadraController.listar)
    router.get('/:id', quadraController.buscarPorId)
    router.put('/:id', quadraController.atualizar)
    router.delete('/:id', quadraController.excluir)

    return router
}
