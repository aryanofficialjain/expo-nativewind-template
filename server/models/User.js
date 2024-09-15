const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Each user should have a unique username
        trim: true
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true, // Each user should have a unique phone number
        trim: true
    },
    bio: {
        type: String,
        default: '', // Bio is optional, so default is an empty string
        trim: true
    },
    profileImage: {
        type: String,
        default: '' // This will hold the URL or path to the profile image, default is empty
    },
    dateOfBirth: {
        type: Date,
        required: true // Date of birth is required
    },
    password: {
        type: String,
        required: true
    },
    isCreator: {
        type: Boolean,
        default: false // User is not a creator by default
    }
}, {
    timestamps: true // This automatically adds createdAt and updatedAt timestamps
});

// Create a model
const User = mongoose.model('User', userSchema);

module.exports = User;