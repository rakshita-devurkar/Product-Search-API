import React from 'react';
import Product from './components/product';
import Header from './components/header';

/*
TODO: Add the styling in a different file and bundle it with Webpack
*/

const ProductsStyle = {
	display: 'flex',
	flexDirection:'row',
	flexWrap:'wrap',
	marginTop: '10%'
}

const layout = {
	display: 'flex',
	flexDirection: 'column'
}

export default class Products extends React.Component {
	render() {
		if(this.props.productData.length==0) {
			return (
				<div style={layout}>
				<Header></Header>
				<div style={ProductsStyle}>
				<h4>No Products Found!</h4>
				</div>
				</div>
			);
		}
		else {
			return (
				<div style={layout}>
					<Header></Header>
					<div style={ProductsStyle}>
					{this.props.productData.map(product => {
						return <Product key = {product.itemId} imageUrl = {product.image} name={product.name} price={product.price}> </Product> 
					})}
					</div>
				</div>
			); 
		}
	}
}
