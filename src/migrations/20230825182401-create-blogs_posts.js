'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
      },
      title: { 
        type: Sequelize.STRING, 
      },
      content: {
        type: Sequelize.TEXT,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      published: {
        type: Sequelize.DATE,
      },
      updated: {
        type: Sequelize.DATE,
      },
    },
    { 
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("blog_posts");
  }
};

