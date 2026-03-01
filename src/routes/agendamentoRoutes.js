const express = require('express')

module.exports = (agendamentoController) => {
    const router = express.Router()

    router.post('/', agendamentoController.criar)
    router.get('/', agendamentoController.listar)

    return router
}