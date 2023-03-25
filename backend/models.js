require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, { dialect: 'mysql', host: process.env.DBHOST})
const Interest = sequelize.define('Interest', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    summary:{
        type: DataTypes.STRING,
        allowNull: false
    },
    post:{
        type: DataTypes.TEXT,
        allowNull: false
    }
});
module.exports = {sequelize, Interest};