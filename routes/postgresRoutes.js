// src/routes/postgresRoutes.js
const express = require('express');
const router = express.Router();
const postgresController = require('../controllers/postgresController');

// GET /api/weather/postgres - Get PostgreSQL weather information for both cities, including temperature specifics.
router.get('/api/weather/postgres', postgresController.getAllWeatherData);

// POST /api/weather/postgres - Update PostgreSQL with temperature information for a given city's weather.
router.post('/api/weather/postgres', postgresController.updateWeatherData);

// PUT /api/weather/postgres/:id - Update weather information for a particular record in PostgreSQL, including temperature details.
router.put('/api/weather/postgres/:id', postgresController.updateWeatherRecord);

// DELETE /api/weather/postgres/:id - Delete PostgreSQL weather information, including temperature details, for a particular record.
router.delete('/api/weather/postgres/:id', postgresController.deleteWeatherRecord);


// GET /api/weather/postgres/:city
router.get('/:city', postgresController.getWeatherForCity);


module.exports = router;

