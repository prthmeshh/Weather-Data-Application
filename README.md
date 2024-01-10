# Weather Data Application

This application is designed to view the weather data for cities. The data is persisted and driven from a PostgreSQL and MongoDB database.

## Project Structure

The project is set up using Express.js for a Node.js project with a specific folder hierarchy for improved organization.

## PostgreSQL Database Setup

The PostgreSQL database, `weather_data`, consists of two tables: `temperature_reports` and `cities`. The `temperature_reports` table includes columns for `id`, `city_id` (foreign key to cities), `temperature`, `humidity`, and `timestamp`. The `cities` table includes columns for `id` and `name`.

## MongoDB Database Setup

The MongoDB database, `weather_data_mongodb`, consists of two collections: `cities` and `temperature_reports`. The `cities` collection includes fields for `name` and `temperature`. The `temperature_reports` collection includes fields for `temperature`, `humidity`, `timestamp`, and `city` (with reference to the city name).

## Express.js API

The Express.js API includes the following routes:

- `GET /api/weather/postgres` - Get PostgreSQL weather information for both cities, including temperature specifics.
- `GET /api/weather/mongodb` - Get the two cities' weather information, including temperature specifics, from MongoDB.
- `POST /api/weather/postgres` - Update PostgreSQL with temperature information for a given city's weather.
- `POST /api/weather/mongodb` - Add temperature information about the weather for a certain city to MongoDB.
- `PUT /api/weather/postgres/:id` - Update weather information for a particular record in PostgreSQL, including temperature details.
- `PUT /api/weather/mongodb/:id` - Update meteorological information for a particular record in MongoDB, including temperature details.
- `DELETE /api/weather/postgres/:id` - Delete PostgreSQL weather information, including temperature details, for a particular record.
- `DELETE /api/weather/mongodb/:id` - Removes meteorological information, including temperature, for a particular record from MongoDB.

## Normalization

The PostgreSQL database architecture incorporates normalization ideas. The impact of normalization on the integrity and redundancy of the data is examined.

## JOIN Activity

A JOIN activity is constructed in which students must use PostgreSQL's JOIN functions to determine the weather (temperature, humidity) for a given city. A route is created that obtains the temperature and weather information for a specific city, akin to `/api/weather/postgres/:city`.

## Mongoose and ORM Fundamentals

The MongoDB database is set up using Mongoose models. Mongoose is used to perform CRUD tasks and abstracts the MongoDB interaction.
