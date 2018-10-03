import React from 'react';
import Product from './components/product';

const ProductsStyle = {
	display: 'flex',
	flexDirection:'row',
	flexWrap:'wrap'
}

export default class Products extends React.Component {
	render() {
			return (
				<div style={ProductsStyle}>
				{this.props.productsData.map(product => {
					return <Product key = {product.itemId} imageUrl = {product.image} name={product.name} price={product.price}> </Product> 
				})}
				</div>
			); 
	}
}
