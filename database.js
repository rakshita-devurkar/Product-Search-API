const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/walmartDb',{ useNewUrlParser: true });
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
//Do Boom error handling here
db.once('open', function (){
	db.dropCollection("products", function (err, result) {

        if (err) {
            console.log("Could not delete existing data");
        }
    });
    console.log('Connection to database.');
});

module.exports = db;