import React from 'react';
import Product from './components/product';

var productsData = [
{
	"imageUrl": "https://i5.walmartimages.com/asr/b3da0c76-61b4-4363-b809-091c413dce10_1.41251691f6bc375272fe38f660dcd1dd.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
	"name" : "Slumber 1 - 8'' Spring Mattress-In-a-Box, Multiple Sizes",
	"price" : "99"
},
{
	"imageUrl": "https://i5.walmartimages.com/asr/bfb92a9b-555e-4f9d-bb8f-f4651ca3c485_1.a6a363462ce892cad12e75edb278c6d5.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
	"name": "\"RCA LED55G55R120Q 55\"\" 1080p 120Hz LED HDTV\"",
	"price": "409.49"
},
{
	"imageUrl": "https://i5.walmartimages.com/asr/b3da0c76-61b4-4363-b809-091c413dce10_1.41251691f6bc375272fe38f660dcd1dd.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
	"name" : "Slumber 1 - 8'' Spring Mattress-In-a-Box, Multiple Sizes",
	"price" : "99"
},
{
	"imageUrl": "https://i5.walmartimages.com/asr/bfb92a9b-555e-4f9d-bb8f-f4651ca3c485_1.a6a363462ce892cad12e75edb278c6d5.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
	"name": "\"RCA LED55G55R120Q 55\"\" 1080p 120Hz LED HDTV\"",
	"price": "409.49"
},
{
	"imageUrl": "https://i5.walmartimages.com/asr/b3da0c76-61b4-4363-b809-091c413dce10_1.41251691f6bc375272fe38f660dcd1dd.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
	"name" : "Slumber 1 - 8'' Spring Mattress-In-a-Box, Multiple Sizes",
	"price" : "99"
},
];

export default class Products extends React.Component {
	render() {
		productsData.map(product => {
			return (
				<Product imageUrl={product.image} name={product.name} price={product.price}/>
			);
		}); 
	}
}
