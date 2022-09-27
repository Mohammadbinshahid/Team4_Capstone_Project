// Import the path module
const path = require('path')

// Import the dotenv npm package
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

// Import the sequelize npm package
const Sequelize = require('sequelize');

// Create a connection to our database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
    
// Export sequelize
module.exports = sequelize;
