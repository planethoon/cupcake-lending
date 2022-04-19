'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plan.init({
    planId: DataTypes.INTEGER,
    planModelId: DataTypes.INTEGER,
    lender: DataTypes.STRING,
    erc20ContractAddr: DataTypes.STRING,
    initialBalance: DataTypes.INTEGER,
    availableBalance: DataTypes.INTEGER,
    isStopped: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Plan',
  });
  return Plan;
};