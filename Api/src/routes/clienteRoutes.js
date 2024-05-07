// clienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rutas para los clientes
router.get('/', clienteController.obtenerClientes);
router.post('/', clienteController.crearCliente);

// Otros endpoints para actualizar y eliminar clientes

module.exports = router;
