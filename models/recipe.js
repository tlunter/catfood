'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cookTime: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Recipe.hasMany(models.Step, {
          as: 'steps'
        });
        models.Recipe.hasMany(models.Ingredient, {
          as: 'ingredients'
        });
      }
    }
  });
  return Recipe;
};
