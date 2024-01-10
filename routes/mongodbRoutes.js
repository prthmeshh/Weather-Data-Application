// src/routes/mongodbRoutes.js
const express = require('express');
const router = express.Router();
const mongodbController = require('../controllers/mongodbController');

// GET route to retrieve weather information for all cities
router.get('/api/weather/mongodb', mongodbController.getAllWeatherData);

// POST route to add temperature information for a city
router.post('/api/weather/mongodb', mongodbController.addWeatherData);

// PUT route to update meteorological information for a specific record
router.put('/api/weather/mongodb/:id', mongodbController.updateWeatherRecord);

// DELETE route to remove meteorological information for a specific record
router.delete('/api/weather/mongodb/:id', mongodbController.deleteWeatherRecord);

module.exports = router;
