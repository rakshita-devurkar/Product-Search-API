const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/walmartDb');
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});

module.exports = db;