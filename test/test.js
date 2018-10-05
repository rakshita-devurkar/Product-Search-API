const Lab = require("lab");       
const lab = exports.lab = Lab.script(); 
const Code = require("code");		 
const server = require("../index.js");

lab.experiment("All API Tests", function() {
	lab.test("Get all products", async function() {
		const options = {
			method: "GET",
			url: "/"
		};
		const response = await server.inject(options);
		Code.expect(response.statusCode).to.equal(200);  
		await server.stop();
	});

	lab.test("Get products that contains the keyword", async function() {
		const options = {
			method: "GET",
			url: "/product/mattress"
		};
		const response = await server.inject(options);
		Code.expect(response.statusCode).to.equal(200);
		await server.stop();
	});

	lab.test("Get products with non existing keyword", async function() {
		const options = {
			method: "GET",
			url: "/product/hapijs"
		};
		const response = await server.inject(options);
		Code.expect(response.result.message).to.equal("No products found");
		await server.stop();
	});

	lab.test("Invalid Url", async function() {
		const options = {
			method: "GET",
			url: "/product"
		};
		const response = await server.inject(options);
		Code.expect(response.statusCode).to.equal(404);
		await server.stop();
	});
});