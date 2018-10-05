require('babel-core/register')({
	presets: ['react','env']
});

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Path = require('path');
const db = require('./database').db;
const data = require('./data.js');
const ProductController = require('./src/controllers/products.js');
const server = new Hapi.Server({
	"host": "localhost",
	"port": "3000"
});

const setupRoutes = () => {
	server.route({
		method: 'GET',
		path: '/',
		options: {
			handler: ProductController.getProducts
		}
	});

	server.route({
		method: 'GET',
		path: '/product/{keyword}',
		options: {
			handler: ProductController.searchProducts
		}
	});
}


const init = async () => {
	data.loadData();
	await server.register([Inert, Vision]);
	await server.views({
			engines: {
				js: require('hapi-react-views')
			},
			relativeTo: __dirname,
			path: 'src/views',
	});
	setupRoutes();
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();

module.exports = server;
