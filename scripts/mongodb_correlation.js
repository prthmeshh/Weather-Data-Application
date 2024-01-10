// Correlation between cities and reports collections
const result = db.cities.aggregate([
    {
        $lookup: {
            from: "reports",
            localField: "name",
            foreignField: "city",
            as: "weatherData"
        }
    }
]);

printjson(result.toArray());
