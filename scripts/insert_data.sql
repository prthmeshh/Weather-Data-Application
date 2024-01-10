-- Insert data into cities
INSERT INTO cities (name) VALUES
('City1'),
('City2');

-- Insert data into temperature_reports
INSERT INTO temperature_reports (city_id, temperature, humidity, timestamp) VALUES
(1, 25.5, 50, '2023-01-01 12:00:00'),
(2, 28.0, 45, '2023-01-01 12:00:00');
