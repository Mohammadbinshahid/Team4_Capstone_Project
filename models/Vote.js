// Import the sequelize npm package
const { Model, DataTypes } = require('sequelize');

// Import the connection to the database
const sequelize = require('../config/connection');

// Create the Vote model as an extension of the Model class
class Vote extends Model {}
// Define the columns of the Vote model
Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vote'
  }
);

// Export the vote model
module.exports = Vote;
