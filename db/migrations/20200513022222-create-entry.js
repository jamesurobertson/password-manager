'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      platformId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Platforms"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Entries');
  }
};
