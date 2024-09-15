require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const connect = require('./db/Connectdb.js');
const routes = require('./routes'); // This imports the routes/index.js

// Middleware
app.use(cors());
app.use(express.json()); // To handle JSON data in requests

// DB connection
connect(process.env.DBURI);

// Routes
app.use('/', routes); // All routes are imported from routes/index.js

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!!!`);
});