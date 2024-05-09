const Joi = require('joi');
const Empresa = require('../models/empresaModel');

// Esquema de validación Joi para la creación de una nueva empresa
const empresaSchema = Joi.object({
  nit: Joi.string().required(),
  nombre: Joi.string().required(),
  direccion: Joi.string().required(),
  telefono: Joi.string().required(),
});

// Controlador para obtener todas las empresas
exports.obtenerEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.json(empresas);
  } catch (error) {
    console.error('Error al obtener empresas:', error);
    res.status(500).json({ mensaje: 'Error al obtener empresas' });
  }
};

// Controlador para crear una nueva empresa
exports.crearEmpresa = async (req, res) => {
  try {
    // Validar los datos de entrada
    const { error, value } = empresaSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ mensaje: error.details[0].message });
    }
    
    // Crear la nueva empresa con los datos validados
    const nuevaEmpresa = await Empresa.create(value);
    res.status(201).json(nuevaEmpresa);
  } catch (error) {
    console.error('Error al crear empresa:', error);
    res.status(500).json({ mensaje: 'Error al crear empresa' });
  }
};

// Controlador para obtener los detalles de una empresa por su NIT
exports.obtenerDetallesEmpresa = async (req, res) => {
  try {
    const nit = req.params.nit;
    const empresa = await Empresa.findOne({ where: { nit } });
    
    if (!empresa) {
      return res.status(404).json({ mensaje: 'Empresa no encontrada' });
    }
    
    res.json(empresa);
  } catch (error) {
    console.error('Error al obtener detalles de empresa:', error);
    res.status(500).json({ mensaje: 'Error al obtener detalles de empresa' });
  }
};

// Controlador para eliminar una empresa por su NIT
exports.eliminarEmpresa = async (req, res) => {
  try {
    const nit = req.params.nit;
    
    // Buscar la empresa por su NIT
    const empresa = await Empresa.findOne({ where: { nit } });
    if (!empresa) {
      return res.status(404).json({ mensaje: 'Empresa no encontrada' });
    }

    // Eliminar la empresa
    await empresa.destroy();

    res.json({ mensaje: 'Empresa eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar empresa:', error);
    res.status(500).json({ mensaje: 'Error al eliminar empresa' });
  }
};

