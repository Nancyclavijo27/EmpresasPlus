const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isAdmin, isExternal } = require('../middleware/authMiddleware'); // Asegúrate de importar correctamente el middleware

// Middleware para verificar el token JWT
const { authenticateJWT } = require('../middleware/authMiddleware'); // Importa authenticateJWT desde authMiddleware

// Ruta para el inicio de sesión
router.post('/login', authenticateJWT, authController.login);

// Ruta para el inicio de sesión con permisos de administrador
router.post('/admin/login', isAdmin, authenticateJWT, authController.login);

// Ruta para el inicio de sesión con permisos de externo
router.post('/external/login', isExternal, authenticateJWT, authController.login);

// Ruta para el registro de nuevos usuarios
router.post('/registro', authController.registro);

module.exports = router;
