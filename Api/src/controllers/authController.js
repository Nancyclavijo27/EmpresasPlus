const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuarioModel');
const Joi = require('joi');
const { secret, expiresIn } = require('../config/jwt');

// Esquema de validación Joi para el inicio de sesión
const loginSchema = Joi.object({
  correo: Joi.string().email().required(),
  contraseña: Joi.string().required(),
});

// Esquema de validación Joi para el registro de nuevos usuarios
const registroSchema = Joi.object({
  correo: Joi.string().email().required(),
  contraseña: Joi.string().min(6).required(),
  tipo: Joi.string().valid('Administrador', 'Externo').required()
  // Puedes agregar más campos aquí según tus requerimientos de registro
});

// Controlador para el inicio de sesión
exports.login = async (req, res) => {
  try {
    // Validar los datos de entrada para el inicio de sesión
    const { error, value } = loginSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ mensaje: 'Error de validación', detalle: error.details[0].message });
    }

    const { correo, contraseña } = value;

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

// Controlador para el registro de nuevos usuarios
exports.registro = async (req, res) => {
  try {
    // Validar los datos de entrada para el registro de usuarios
    const { error, value } = registroSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ mensaje: 'Error de validación', detalle: error.details[0].message });
    }

    const { correo, contraseña, tipo } = value;

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
    if (error.name === 'SequelizeValidationError') {
      // Error de validación de Sequelize
      const mensajes = error.errors.map(err => err.message);
      return res.status(400).json({ mensaje: 'Error de validación', detalles: mensajes });
    } else {
      // Otro tipo de error
      res.status(500).json({ mensaje: 'Error al registrar usuario' });
    }
  }
};
