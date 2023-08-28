const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Books = sequelize.define('books', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zoner:{
        type: Sequelize.STRING,
        allowNull: false
      }
});

module.exports = Books;