const Usuario = require('../models/usuarioModel');

// Controlador para obtener la lista de correos de usuarios
exports.obtenerCorreosUsuarios = async (req, res) => {
  try {
    // Realiza la consulta para obtener solo los correos de los usuarios
    const usuarios = await Usuario.findAll({
      attributes: ['correo'] // Especifica los atributos que deseas seleccionar
    });

    // Extrae los correos de la lista de usuarios
    const correos = usuarios.map(usuario => usuario.correo);

    // Envía la lista de correos como respuesta
    res.json(correos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener la lista de correos de usuarios' });
  }
};

// Controlador para eliminar un usuario
exports.eliminarUsuario = async (req, res) => {
  const { correo } = req.params;

  try {
    await Usuario.destroy({
      where: {
        correo: correo
      }
    });
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al eliminar el usuario' });
  }
};
