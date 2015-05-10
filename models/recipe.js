'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cookTime: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Recipe;
};