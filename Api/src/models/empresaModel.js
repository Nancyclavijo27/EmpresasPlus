const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la instancia de Sequelize configurada

class Empresa extends Model {}

Empresa.init({
  nit: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Empresa',
  timestamps: false, // Opcional: Deshabilita la generación automática de timestamps
});

module.exports = Empresa;
