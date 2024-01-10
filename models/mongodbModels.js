// models/mongodbModels.js
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const reportSchema = new mongoose.Schema({
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const City = mongoose.model('City', citySchema);
const Report = mongoose.model('Report', reportSchema);

module.exports = {
    City,
    Report
};
