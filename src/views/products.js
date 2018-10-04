import React from 'react';
import Product from './components/product';
import Header from './components/header';

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
