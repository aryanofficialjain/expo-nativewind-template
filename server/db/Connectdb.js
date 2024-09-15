const mongoose = require('mongoose');

const connect = async(url) => {
    await mongoose.connect(url)
        .then(() => console.log("MongoDB connected successfully"))
        .catch((error) => console.log("Error in database connection", error));
};

module.exports = connect;