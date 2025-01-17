const express = require('express'); // Baris ke-3
const app = express();
const PORT = 5000;

// Middleware untuk parsing JSON
app.use(express.json());

// Rute sederhana
app.get('/', (req, res) => {
    res.send('Weather API is running');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
