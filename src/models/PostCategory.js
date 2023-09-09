module.exports = (sequelize, DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {
    postId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    categoryId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }, 
  },
  {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });
  
  PostCategoryModel.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategoryModel,
      foreignKey: 'category_id',
      otherKey: 'post_id'
    });
    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: PostCategoryModel,
      foreignKey: 'post_id',
      otherKey: 'category_id'
    })
  }

  return PostCategoryModel;
};