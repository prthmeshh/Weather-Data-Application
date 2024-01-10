// postgresModels.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/postgres/dbConfig');


const City = sequelize.define('City', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Temperature = sequelize.define('Temperature', {
    temperature: {
        type: DataTypes.FLOAT, // Adjust the data type based on your requirements
        allowNull: false
    },
    humidity: {
        type: DataTypes.FLOAT, // Adjust the data type based on your requirements
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE, // Adjust the data type based on your requirements
        allowNull: false
    }
});

// Define associations (assuming you have a foreign key relationship between City and Temperature)
City.hasMany(Temperature);
Temperature.belongsTo(City);

module.exports = {
    City,
    Temperature
};

