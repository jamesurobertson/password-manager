'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    username: DataTypes.STRING(30),
    password: DataTypes.STRING,
    platformId: DataTypes.INTEGER
  }, {});
  Entry.associate = function(models) {
    // associations can be defined here
    Entry.belongsTo(models.Platform, {foreignKey: 'platformId'})
  };
  return Entry;
};
