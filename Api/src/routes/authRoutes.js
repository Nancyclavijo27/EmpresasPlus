const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para el inicio de sesión general
router.post('/login', authController.login);

// Ruta para el inicio de sesión de administrador con clave
router.post('/admin/login', authController.adminLogin);

// Ruta para el registro de nuevos usuarios
router.post('/registro', authController.registro);

router.get('/usuario/:userId', authController.obtenerDetalleUsuario);

module.exports = router;
