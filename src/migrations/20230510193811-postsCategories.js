'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      postId : {
        field: 'post_id',
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references : {
          model: 'blog_posts',
          key: 'id',
        },
      },
      categoryId : {
        field: 'category_id',
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('posts_categories');
  },
};
