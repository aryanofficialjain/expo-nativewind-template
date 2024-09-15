const express = require('express');
const LoginRoute = require('./Login');
const RegisterRoute = require("./Register");
const ProfileRoute = require("./Profile") // Login route
// You can add more routes here like this
// const AnotherRoute = require('./AnotherRoute');

const router = express.Router();

// Use route modules
router.use('/login', LoginRoute);
router.use('/register', RegisterRoute);
router.use('/profile', ProfileRoute);



// Export the router
module.exports = router;