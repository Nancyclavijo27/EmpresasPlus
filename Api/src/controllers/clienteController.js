const Cliente = require('../models/clienteModel');

// Controlador para obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ mensaje: 'Error al obtener clientes' });
  }
};

// Controlador para crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  try {
    const nuevoCliente = await Cliente.create({ nombre, correo, contraseña });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ mensaje: 'Error al crear cliente' });
  }
};

// Controlador para obtener un cliente por su ID
exports.obtenerClientePorId = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    console.error('Error al obtener cliente por ID:', error);
    res.status(500).json({ mensaje: 'Error al obtener cliente por ID' });
  }
};

// Controlador para actualizar un cliente existente
exports.actualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, contraseña } = req.body;

  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    await cliente.update({ nombre, correo, contraseña });
    res.json({ mensaje: 'Cliente actualizado correctamente', cliente });
  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    res.status(500).json({ mensaje: 'Error al actualizar cliente' });
  }
};

// Controlador para eliminar un cliente existente
exports.eliminarCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    await cliente.destroy();
    res.json({ mensaje: 'Cliente eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    res.status(500).json({ mensaje: 'Error al eliminar cliente' });
  }
};
