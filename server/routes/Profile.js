const express = require('express');
const User = require('../models/User'); 
const router = express.Router();

// Profile route
router.get('/:username', async (req, res) => {
    try {
        const { username } = req.params;

        // Fetch user by username
        const user = await User.findOne({ username });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Respond with user data (excluding password for security)
        res.status(200).json({
            username: user.username,
            phonenumber: user.phonenumber,
            bio: user.bio,
            profileImage: user.profileImage,
            dateOfBirth: user.dateOfBirth,
            isCreator: user.isCreator
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error });
    }
});

module.exports = router;