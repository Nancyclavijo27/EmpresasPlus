// clienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rutas para los clientes
router.get('/', clienteController.obtenerClientes);
router.post('/', clienteController.crearCliente);
router.get('/:id', clienteController.obtenerClientePorId);
router.put('/:id', clienteController.actualizarCliente); // Define la ruta PUT para actualizar un cliente
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router
