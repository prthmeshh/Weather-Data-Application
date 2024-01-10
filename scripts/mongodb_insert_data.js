// Add data to the collections
db.cities.insertMany([
    { name: "City3" },
    { name: "City4" }
]);

db.reports.insertMany([
    { city: "City3", temperature: 26.5, humidity: 55, timestamp: new Date("2023-01-01T12:00:00Z") },
    { city: "City4", temperature: 27.0, humidity: 48, timestamp: new Date("2023-01-01T12:00:00Z") }
]);
