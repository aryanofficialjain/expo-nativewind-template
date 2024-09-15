const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Import the User model
const { generateToken } = require('../helpers/jwtHelper'); // Import the helper function
const router = express.Router();

// Login route
router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if username and password are provided
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Check if the user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate a JWT token
        const token = await generateToken(user._id);

        // If login is successful
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

module.exports = router;