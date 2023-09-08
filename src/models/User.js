module.exports = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    displayName: { 
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    email: { 
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false
    },
    image: { 
      type: DataTypes.STRING, 
      allowNull: true
    },
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  UserModel.associate = ({ BlogPost }) => {
    UserModel.hasMany(BlogPost, { foreignKey: 'userId', as: 'BlogPosts'})
  }

  return UserModel;
};