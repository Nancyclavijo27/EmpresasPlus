const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la instancia de Sequelize configurada

class Categoria extends Model {}

Categoria.init({
  nombre: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Categoria',
  timestamps: false, // Opcional: Deshabilita la generación automática de timestamps
});

module.exports = Categoria;
