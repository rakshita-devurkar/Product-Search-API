const Boom = require('boom');
const data = require('../../data.js');
const Product = require('../models/products');

exports.getProducts = (request, h) => {
	return Product.find({}).exec().then((products) => {
		if(products === null) return Boom.notFound('No products found.');
		return h.view('products',{
			productData: products
		});
	}).catch((err) => {
		return Boom.serverUnavailable('Cannot fetch from database');
	});
}

exports.searchProducts = (request, h) => {
	var itemIds = data.keywordsMap.get(request.params.keyword);
	if(!itemIds) {
		return h.view('products',{
			productData: []
		});
	}
	
	return Product.find({itemId: {$in: Array.from(itemIds)}}).exec().then((products) => {
		if(products === null) return Boom.notFound('No products found');
		return h.view('products',{
			productData: products
		});
	}).catch((err) => {
		console.log(err);
		return Boom.serverUnavailable('Cannot fetch from database');
	});
}

