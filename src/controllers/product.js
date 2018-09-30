const data = require('../../data.js');
const Product = require('../models/product');

exports.getProducts = (request, h) => {

	return new Promise((resolve, reject) => {
			Product.find({}, function (error, products) {
				if (error) {
					return reject(error);
				}

				return resolve(products);

			});
	});

	// return Product.find({}).then((products) => {
	// 	return products;
	// }).catch((err) => {
	// 	return {err: err};
	// });
}


exports.searchProducts = (request, h) => {

	return new Promise((resolve, reject) => {
			var keyword = request.params.keyword;
			if(data.keywordsMap.has(keyword)) {
				resolve(data.keywordsMap.get(keyword));
			}
			else
				reject();
	});

	// return (async (request, reply) => {
	// 	try {
	// 		var keyword = request.params.keyword;
	// 		await data.keywordsMap.get(keyword);
	// 		if(!data.keywordsMap.has(keyword)) {
	// 			throw();
	// 		}
	// 		return data.keywordsMap.get(keyword);
	// 	}
	// 	catch(error) {
	// 		console.log(error);
	// 		throw error;
	// 	}
	// })();
}
