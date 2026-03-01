const express = require('express')
const RelatorioController = require('../controllers/RelatorioController')


module.exports = (relatorioController) => {
    const router = express.Router()

    router.get('/faturamento-por-quadra',relatorioController.faturamentoPorQuadra)
    router.get('/faturamento-por-dia', relatorioController.faturamentoPorDia)
    router.get('/faturamento-por-cliente', relatorioController.faturamentoPorCliente)
    router.get('/ocupacao-por-quadra', relatorioController.ocupacaoPorQuadra)

    return router
}