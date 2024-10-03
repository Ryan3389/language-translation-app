const mongoose = require('mongoose');
require('dotenv').config()

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/language-translation-app');
mongoose.connect(process.env.DB_URL)

module.exports = mongoose.connection;
