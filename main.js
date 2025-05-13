// main.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); 
const cors = require('cors');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api/auth', authRoutes); 

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Succesfully you are connected to cloud database MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


// Basic route for the homepage (if your index.html is in 'public')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Global error handler (optional, but good practice)
app.use((err, req, res, next) => {
    console.error("Global Error Handler:", err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'An unexpected error occurred',
        // error: process.env.NODE_ENV === 'development' ? err : {} // Only show stack in dev
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
