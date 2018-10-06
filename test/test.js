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

lab.experiment("Rendering views test", function() {
	lab.test("Renders the Products view successfully", async () => {
        var products = [{"itemId": 44109840, "name": "Disney - Disney Sleepwear", "price":9.97, "image":"https://i5.walmartimages.com/asr/cde40e3e-3af7-4478-ae9e-3ccd56c57273_1.66232a22191b244da9c6dee5e2538d7a.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF" },
        				{"itemId": 19716431, "name": "Abu Garcia Black Max Reel", "price":49.96, "image":"https://i5.walmartimages.com/asr/cc9cede8-265a-436f-b855-021e82a5e8be_1.3b50a22e7b9cfab8e637ee5b82204df2.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF" }];

        await server.render('products', {
			productData: products
		});
	});
});