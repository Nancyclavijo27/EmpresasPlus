const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importa la instancia de Sequelize configurada

class Usuario extends Model {}

Usuario.init({
  correo: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('Administrador', 'Externo'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Usuario',
  timestamps: false, // Opcional: Deshabilita la generación automática de timestamps
});

module.exports = Usuario;
