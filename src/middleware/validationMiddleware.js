const { body, validationResult } = require('express-validator');

const validateWeather = [
    body('city').notEmpty().withMessage('City is required'),
    body('temperature').isNumeric().withMessage('Temperature must be a number'),
    body('humidity').isNumeric().withMessage('Humidity must be a number'),
    body('weather_condition').notEmpty().withMessage('Weather condition is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateWeather };
