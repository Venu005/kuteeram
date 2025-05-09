const mongoose = require('mongoose');
const dotenv = require('dotenv').config()


const connectDB = mongoose.connect(process.env.MONGOURL).then(() => {
    console.log('Connected to local MongoDB');
}).catch(() => {
    console.log("Error connecting to local MongoDB");
});

module.exports = {connectDB}
