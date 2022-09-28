// Import the sequelize npm package
const { Model, DataTypes } = require('sequelize');

// Import the connection to the database
const sequelize = require('../config/connection');

// Create the Comment model as an extension of the Model class
class Comment extends Model {}

Comment.init(
  {
    // Define columns of the Comment model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

// Export the Comment model
module.exports = Comment;
