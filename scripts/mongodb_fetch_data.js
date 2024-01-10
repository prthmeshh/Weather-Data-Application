// Fetch correlated data for a specific city
const cityName = "City3";
const result = db.cities.aggregate([
    {
        $match: { name: cityName }
    },
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
