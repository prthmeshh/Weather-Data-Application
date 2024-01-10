// src/db/mongodb/dbConfig.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/weather_data_mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;

