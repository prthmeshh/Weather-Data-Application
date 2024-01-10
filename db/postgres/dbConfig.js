
// db/postgres/dbConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'weather_data',
    username: 'postgres',
    password: '12345',
    host: '127.0.0.1',
    port: 5432,
});

module.exports = sequelize;