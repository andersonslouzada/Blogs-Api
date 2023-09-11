module.exports = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    title: { 
      type: DataTypes.STRING, 
    }, 
    content: { 
      type: DataTypes.STRING, 
    },
    userId: { 
      type: DataTypes.INTEGER, 
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    published: { 
      type: DataTypes.DATE,
    },
    updated: { 
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });

  BlogPostModel.associate = ({ User }) => {
    BlogPostModel.belongsTo(User, { foreignKey: 'userId', as: 'user'})
  }

  return BlogPostModel;
};