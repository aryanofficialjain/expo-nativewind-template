const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Import the User model
const { generateToken } = require('../helpers/jwtHelper'); // Import the helper function
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { username, password, dateOfBirth, bio, profileImage, phonenumber } = req.body;

        // Check if required fields are present
        if (!username || !password || !dateOfBirth || !phonenumber) {
            return res.status(400).json({ message: 'Username, password, date of birth, and phone number are required' });
        }

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword,
            dateOfBirth,
            phonenumber,
            bio: bio || '', // Set bio to an empty string if not provided
            profileImage: profileImage || '' // Set profile image to an empty string if not provided
        });

        // Save the user to the database
        await newUser.save();

        // Generate a JWT token
        const token = await generateToken(newUser._id);

        // Respond with success message and token
        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

module.exports = router;