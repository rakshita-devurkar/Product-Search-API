const Boom = require('boom');
const data = require('../../data.js');
const Product = require('../models/product');

exports.getProducts = (request, h) => {
	return Product.find({}).exec().then((product) => {
		if(product === null) return Boom.notFound('No products found.');
		return product;
		// return h.view('products', {
		// 	productsData: product
		// });
	}).catch((err) => {
		return Boom.serverUnavailable('Cannot fetch from database');
	});
}

exports.searchProducts = (request, h) => {
	var itemIds = data.keywordsMap.get(request.params.keyword.toLowerCase());
	if(!itemIds) {
		return Boom.notFound('No products found');
	}
	
	return Product.find({itemId: {$in: Array.from(itemIds)}}).exec().then((product) => {
		if(product === null) return Boom.notFound('No products found');
		return product;
		// return h.view('products', {
		// 	productsData: product
		// });
	}).catch((err) => {
		return Boom.serverUnavailable('Cannot fetch from database');
	});
}

