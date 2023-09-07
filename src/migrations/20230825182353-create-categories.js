'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
      },
      name: { 
        type: Sequelize.STRING, 
        allowNull: false
      }, 
    },
    {
      tableName: 'categories',
      timestamps: false,
      underscored: true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("categories");
  }
};
