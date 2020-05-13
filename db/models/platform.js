'use strict';
module.exports = (sequelize, DataTypes) => {
  const Platform = sequelize.define('Platform', {
    name:{
      type: DataTypes.STRING(50),
      uniqe: true
    }
  }, {});
  Platform.associate = function(models) {
    // associations can be defined here

  };
  return Platform;
};
