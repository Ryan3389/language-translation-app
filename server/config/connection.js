// const mongoose = require('mongoose');
// require('dotenv').config()

// mongoose.connect(process.env.DB_URL)

// module.exports = mongoose.connection;

const mongoose = require('mongoose');
require('dotenv').config()

const uri = process.env.MONGO_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.log('MongoDB connection error:', err));