const db = require('../config/db');

const User = {
    create: (username, email, password, role, callback) => {
        db.query(
            "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
            [username, email, password, role],
            callback
        );
    },
    findByEmail: (email, callback) => {
        db.query("SELECT * FROM users WHERE email = ?", [email], callback);
    }
};

module.exports = User;
