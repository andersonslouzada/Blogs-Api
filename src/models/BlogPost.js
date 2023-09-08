module.exports = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    title: { 
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    content: { 
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true
    },
    userId: { 
      type: DataTypes.STRING, 
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    published: { 
      type: DataTypes.STRING, 
    },
    updated: { 
      type: DataTypes.STRING, 
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