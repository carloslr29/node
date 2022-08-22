const express = require('express');
const router = express.Router();

const ctrlCliente= require('../controllers/cliente.controller');

router.post('/clientes/registro', ctrlCliente.registrarClientes);
router.get('/clientes', ctrlCliente.getClientes);
router.get('/clientes/:id', ctrlCliente.getClienteId);
router.post('/clientes/:id', ctrlCliente.actualizarClienteId);

module.exports = router;