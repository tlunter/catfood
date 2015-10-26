'use strict';
module.exports = function(sequelize, DataTypes) {
  var Step = sequelize.define('Step', {
    description: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Step.belongsTo(models.Recipe);
      }
    }
  });
  return Step;
};
