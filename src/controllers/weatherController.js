const Weather = require('../models/weatherModel');

exports.getWeather = (req, res, next) => {
    Weather.getAll((err, results) => {
        if (err) return next(err);
        res.json(results);
    });
};

exports.getWeatherByCity = (req, res, next) => {
    const { city } = req.params;
    Weather.getByCity(city, (err, results) => {
        if (err) return next(err);
        res.json(results);
    });
};

exports.createWeather = (req, res, next) => {
    const { city, temperature, humidity, weather_condition } = req.body;
    Weather.create(city, temperature, humidity, weather_condition, (err, result) => {
        if (err) return next(err);
        res.status(201).json({ message: "Weather data added successfully" });
    });
};

exports.updateWeather = (req, res, next) => {
    const { id } = req.params;
    const { city, temperature, humidity, weather_condition } = req.body;
    Weather.update(id, city, temperature, humidity, weather_condition, (err, result) => {
        if (err) return next(err);
        res.json({ message: "Weather data updated successfully" });
    });
};

exports.deleteWeather = (req, res, next) => {
    const { id } = req.params;
    Weather.delete(id, (err, result) => {
        if (err) return next(err);
        res.json({ message: "Weather data deleted successfully" });
    });
};
