'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    amount: DataTypes.STRING,
    thing: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        models.Ingredient.belongsTo(models.Recipe);
      }
    }
  });
  return Ingredient;
};
