// src/controllers/postgresController.js
const { Pool } = require('pg');
const pool = new Pool();


const { City, TemperatureReport } = require('../models/postgresModels');



const getAllWeatherData = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM temperature_reports');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



const updateWeatherData = async (req, res) => {
    try {
        const { cityId, temperature, humidity, timestamp } = req.body;

        // Check if the city exists
        const city = await City.findByPk(cityId);
        if (!city) {
            return res.status(404).json({ error: 'City not found' });
        }

        // Add temperature data to temperature_reports table
        const result = await TemperatureReport.create({
            city_id: cityId,
            temperature,
            humidity,
            timestamp,
        });

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



const updateWeatherRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const { temperature, humidity, timestamp } = req.body;

        const result = await pool.query(
            'UPDATE temperature_reports SET temperature = $1, humidity = $2, timestamp = $3 WHERE id = $4',
            [temperature, humidity, timestamp, id]
        );

        res.json({ message: 'Weather record updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



const deleteWeatherRecord = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query('DELETE FROM temperature_reports WHERE id = $1', [id]);

        res.json({ message: 'Weather record deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getWeatherForCity = async (req, res) => {
    try {
        const cityName = req.params.city;

        // Perform a JOIN operation to get weather information for the specified city
        const result = await pool.query(`
            SELECT tr.temperature, tr.humidity, tr.timestamp
            FROM temperature_reports tr
            INNER JOIN cities c ON tr.city_id = c.id
            WHERE c.name = $1
        `, [cityName]);

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {
    getAllWeatherData,
    updateWeatherData,
    updateWeatherRecord,
    deleteWeatherRecord,
    getWeatherForCity
};
