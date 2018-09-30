const data = require('../../data.js');

exports.get = (req,h) => {
	console.log(data);
	return "Hello";
}
