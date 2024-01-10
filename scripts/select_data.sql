-- Select data for a specific city
SELECT cities.name, temperature_reports.temperature, temperature_reports.humidity, temperature_reports.timestamp
FROM temperature_reports
JOIN cities ON temperature_reports.city_id = cities.id
WHERE cities.name = 'City1';
