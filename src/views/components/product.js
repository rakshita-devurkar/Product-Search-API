import React from 'react';

/*
TODO: Add the styling in a different file and bundle it with Webpack
*/

const productStyle = {
	background: 'white',
	margin: '30px',
	marginTop: '20px',
	width: '200px',
	border: '1px solid #cfcfcf',
	padding: '25px 55px 35px 55px'
}

const imageStyle = {
	overflow: 'hidden',
	borderRadius: '2px 2px 0 0',
	maxHeight: '200px',
}

const img = {
	cursor: 'zoom-in',
	width: '100%',
	height: 'auto',
}

const nameStyle = {
	fontWeight: 'normal',
	fontSize: '16px',
	lineHeight: '20px',
	marginBottom: '8px',
	color: '$gray-medium',
	padding: '0 16px',
	textAlign: 'center'
}

const priceStyle = {
	fontSize: '22px',
	fontWeight: '700',
	lineHeight: '22px',
	marginBottom: '16px',
	color: '$gray-medium',
	padding: '0 16px',
	textAlign: 'center',
}

export default class Product extends React.Component {
	render() {
		let imageUrl = this.props.imageUrl;
		let name = this.props.name;
		let price = this.props.price;
		return (
			<div style={productStyle}>
				<div style={imageStyle}>
					<img style={img} src = {imageUrl}/>
				</div>
				<p style={priceStyle}>$ {price}</p>
				<h4 style={nameStyle}>{name}</h4>
			</div>
		);
	}
}
