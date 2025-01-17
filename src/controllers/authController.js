const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = (req, res) => {
    const { username, email, password, role } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ message: "Error hashing password" });

        User.create(username, email, hashedPassword, role, (err, result) => {
            if (err) return res.status(500).json({ message: "Error creating user" });
            res.status(201).json({ message: "User registered successfully" });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ message: "Invalid email or password" });

        bcrypt.compare(password, results[0].password, (err, isMatch) => {
            if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

            const token = jwt.sign({ id: results[0].id, role: results[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        });
    });
};
