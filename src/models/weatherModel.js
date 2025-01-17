const db = require('../config/db');

const Weather = {
    getAll: (callback) => {
        db.query("SELECT * FROM weather", callback);
    },
    getByCity: (city, callback) => {
        db.query("SELECT * FROM weather WHERE city = ?", [city], callback);
    },
    create: (city, temperature, humidity, condition, callback) => {
        db.query("INSERT INTO weather (city, temperature, humidity, weather_condition) VALUES (?, ?, ?, ?)",
            [city, temperature, humidity, condition], callback);
    },
    update: (id, city, temperature, humidity, condition, callback) => {
        db.query("UPDATE weather SET city=?, temperature=?, humidity=?, weather_condition=? WHERE id=?",
            [city, temperature, humidity, condition, id], callback);
    },
    delete: (id, callback) => {
        db.query("DELETE FROM weather WHERE id = ?", [id], callback);
    }
};

module.exports = Weather;
