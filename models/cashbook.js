'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cashbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cashbook.init({
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    type: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cashbook',
  });
  return Cashbook;
};