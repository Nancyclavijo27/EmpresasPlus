const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.status(403).json({ mensaje: 'Token inválido' });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ mensaje: 'Token de autorización no proporcionado' });
  }
};

const isAdmin = (req, res, next) => {
  // Verificar si el usuario es administrador
  if (req.user && req.user.tipo === 'Administrador') {
    // Usuario tiene permisos de administrador, continuar con la solicitud
    next();
  } else {
    // Usuario no tiene permisos de administrador, devolver error de acceso prohibido
    return res.status(403).json({ mensaje: 'Acceso prohibido' });
  }
};

const isExternal = (req, res, next) => {
  // Verificar si el usuario es externo
  if (req.user && req.user.tipo === 'Externo') {
    // Usuario tiene permisos de externo, continuar con la solicitud
    next();
  } else {
    // Usuario no tiene permisos de externo, devolver error de acceso prohibido
    return res.status(403).json({ mensaje: 'Acceso prohibido' });
  }
};

module.exports = { authenticateJWT, isAdmin, isExternal };
