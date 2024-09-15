const jwt = require('jsonwebtoken');

// Generate a JWT token
const generateToken = async (userId) => {
    try {
        const token = await jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    } catch (error) {
        throw new Error('Error generating token');
    }
};

// Verify a JWT token
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
};

module.exports = { generateToken, verifyToken };