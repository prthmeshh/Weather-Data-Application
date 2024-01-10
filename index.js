// server.js
const express = require('express');
const bodyParser = require('body-parser');
const postgresRoutes = require('./routes/postgresRoutes');
const mongodbRoutes = require('./routes/mongodbRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// PostgreSQL routes
app.use('/api/weather/postgres', postgresRoutes);

// MongoDB routes
app.use('/api/weather/mongodb', mongodbRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
