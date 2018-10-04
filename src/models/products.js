const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    itemId: Number,
	name: String,
	price: Number,
	image: String 
});

module.exports = mongoose.model('product', ProductSchema);