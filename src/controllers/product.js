const data = require('../../data.js');
const Product = require('../models/product');

exports.getProducts = (request, h) => {

	return Product.find({}).exec().then((product) => {
		return product;
		// return h.view('products', {
		// 	productsData: product
		// });
	}).catch((err) => {
		return err;
	});
}

exports.searchProducts = (request, h) => {
	var itemIds = data.keywordsMap.get(request.params.keyword);
	
	return Product.find({itemId: {$in: Array.from(itemIds)}}).exec().then((product) => {
		return product;
		// return h.view('products', {
		// 	productsData: product
		// });
	}).catch((err) => {
		return err;
	});
}

