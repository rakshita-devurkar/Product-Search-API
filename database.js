const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/walmartDb',{ useNewUrlParser: true });
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
//Do Boom error handling here
db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});

module.exports = db;