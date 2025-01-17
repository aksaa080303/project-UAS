const express = require('express');
const {
    getWeather, getWeatherByCity, createWeather, updateWeather, deleteWeather
} = require('../controllers/weatherController');
const verifyToken = require('../middleware/authMiddleware');
const { validateWeather } = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/', getWeather);
router.get('/:city', getWeatherByCity);
router.post('/', verifyToken, validateWeather, createWeather);
router.put('/:id', verifyToken, validateWeather, updateWeather);
router.delete('/:id', verifyToken, deleteWeather);

module.exports = router;
