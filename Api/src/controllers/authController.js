const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarioModel');
const { secret, expiresIn } = require('../config/jwt');
const jwt = require('jsonwebtoken');

// Controlador para inicio de sesión general
exports.login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    // Buscar el usuario por correo en la base de datos
    const usuario = await Usuario.findOne({ where: { correo } });

    // Verificar si el usuario existe
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!contraseñaValida) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    // Generar token JWT
    const token = jwt.sign({ userId: usuario.id }, secret, { expiresIn });

    // Usuario autenticado correctamente, enviar el token JWT en la respuesta
    res.json({ mensaje: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
};

// Controlador para ingreso de administrador con clave
exports.adminLogin = async (req, res) => {
  try {
    const { clave } = req.body;

    // Verificar si la clave proporcionada es la clave de administrador
    if (clave !== 'clave_admin') {
      return res.status(401).json({ mensaje: 'Clave de administrador incorrecta' });
    }

    // Generar token JWT para el administrador
    const token = jwt.sign({ userId: 'admin' }, secret, { expiresIn });

    // Usuario autenticado correctamente, enviar el token JWT en la respuesta
    res.json({ mensaje: 'Inicio de sesión como administrador exitoso', token });
  } catch (error) {
    console.error('Error al iniciar sesión como administrador:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión como administrador' });
  }
};

// Controlador para registro de nuevos usuarios
exports.registro = async (req, res) => {
  try {
    const { correo, contraseña, tipo } = req.body;

    // Verificar si ya existe un usuario con el mismo correo
    const usuarioExistente = await Usuario.findOne({ where: { correo } });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    }

    // Encriptar la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear un nuevo usuario en la base de datos
    const nuevoUsuario = await Usuario.create({ correo, contraseña: hashedPassword, tipo });

    res.status(201).json({ mensaje: 'Usuario registrado correctamente', usuario: nuevoUsuario });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};

