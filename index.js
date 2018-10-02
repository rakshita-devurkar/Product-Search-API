// require('babel-register') ({
// 	presets: ['es2015', 'react'],
// });
const Hapi = require('hapi');
const db = require('./database').db;
const data = require('./data.js');
const ProductController = require('./src/controllers/product.js');
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
	await server.register({plugin: require('vision')});
	await server.views({
			engines: {
				js: require('hapi-react-views')
			},
			relativeTo: __dirname,
			path: 'src/views'
	});
	setupRoutes();
    await server.start();
    return server;
};


init().then(server => {
	console.log(`Server running at: ${server.info.uri}`);
}).catch(err => {
	console.log(err);
});

