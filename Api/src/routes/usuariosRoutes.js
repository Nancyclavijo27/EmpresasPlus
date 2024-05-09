const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para obtener la lista de usuarios
router.get('/usuarios', usuarioController.obtenerCorreosUsuarios); // Debe ser obtenerCorreosUsuarios

// Ruta para eliminar un usuario
router.delete('/usuarios/:correo', usuarioController.eliminarUsuario);

module.exports = router;
