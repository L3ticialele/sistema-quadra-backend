require('dotenv').config()

const express = require('express')
const pool = require('./database/pool')

//Agendamentos
const AgendamentoService = require('./services/AgendamentoService')
const AgendamentoController = require('./controllers/AgendamentoController')
const criarAgendamentoRoutes = require('./routes/agendamentoRoutes')

//Clientes
const ClienteService = require('./services/ClienteService')
const ClienteController = require('./controllers/ClienteController')
const criarClienteRoutes = require('./routes/clienteRoutes')

//Quadras
const QuadraService = require('./services/QuadraService')
const QuadraController = require('./controllers/QuadraController')
const criarQuadraRoutes = require('./routes/quadraRoutes')

//Relatórios
const RelatorioService = require('./services/RelatorioService')
const RelatorioController = require('./controllers/RelatorioController')
const criarRelatorioRoutes = require('./routes/relatorioRoutes')

//Usuários
const UsuarioService = require('./services/UsuarioService')
const UsuarioController = require('./controllers/UsuarioController')
const criarUsuarioRoutes = require('./routes/usuarioRoutes')

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log('Servidor rodando')
})

//Protegendo rotas
const authMiddleware = require('./middlewares/authMiddleware')

//Protegendo relatórios somente para admin
const roleMiddleware = require('./middlewares/roleMiddleware')

//Injeção de dependência (Agendamentos)
const agendamentoService = new AgendamentoService(pool)
const agendamentoController = new AgendamentoController(agendamentoService)

app.use('/agendamentos', authMiddleware, criarAgendamentoRoutes(agendamentoController))

//Injeção de dependência (Clientes)
const clienteService = new ClienteService(pool)
const clienteController = new ClienteController(clienteService)

app.use('/clientes', authMiddleware, criarClienteRoutes(clienteController))

//Injeção de dependência (Quadras)
const quadraService = new QuadraService(pool)
const quadraController = new QuadraController(quadraService)

app.use('/quadras', authMiddleware, criarQuadraRoutes(quadraController))

//Injeção de dependência (Relatorios)
const relatorioService = new RelatorioService(pool)
const relatorioController = new RelatorioController(relatorioService)

app.use('/relatorios', authMiddleware, roleMiddleware(['admin']), criarRelatorioRoutes(relatorioController))

//Injeção de dependência (Usuários)
const usuarioService = new UsuarioService(pool)
const usuarioController = new UsuarioController(usuarioService)

app.use('/usuarios', criarUsuarioRoutes(usuarioController))