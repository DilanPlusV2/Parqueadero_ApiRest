'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {

  }
  Usuario.init({
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    edad: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};