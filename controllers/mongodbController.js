// src/controllers/mongodbController.js
const { City, Report } = require('../models/mongodbModels');

const getAllWeatherData = async (req, res) => {
    try {
        const result = await City.find().populate('reports'); // 'reports' should match the ref in citySchema
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const addWeatherData = async (req, res) => {
    try {
        const { cityName, temperature, humidity, timestamp } = req.body;

        // Check if the city exists
        let city = await City.findOne({ name: cityName });

        // If the city doesn't exist, create it
        if (!city) {
            city = new City({ name: cityName });
            await city.save();
        }

        // Create a new weather report
        const report = new Report({
            temperature,
            humidity,
            timestamp,
            city: city._id
        });

        await report.save();

        // Associate the report with the city
        city.reports.push(report);
        await city.save();

        res.status(201).json(report);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const updateWeatherRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const { temperature, humidity, timestamp } = req.body;

        // Validate the request body

        // Find and update the weather record
        const report = await Report.findByIdAndUpdate(
            id,
            { temperature, humidity, timestamp },
            { new: true }
        );

        if (!report) {
            return res.status(404).send('Weather record not found');
        }

        res.json(report);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteWeatherRecord = async (req, res) => {
    const recordId = req.params.id;

    try {
        const deletedRecord = await Report.findByIdAndDelete(recordId);

        if (!deletedRecord) {
            return res.status(404).json({ message: 'Record not found' });
        }

        res.json({ message: 'Record deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllWeatherData,
    addWeatherData,
    updateWeatherRecord,
    deleteWeatherRecord
};
