import React from 'react';
// import './style.css';

const productStyle = {
	background: 'white',
	margin: '30px',
	width: '200px',
	border: '2px solid gray', 
	borderRadius: '15 px',
	padding: '60px'
}

const imageStyle = {
	overflow: 'hidden',
	borderRadius: '2px 2px 0 0',
	maxHeight: '200px',
	img: {
			'cursor': 'zoom-in',
			'width': '100%',
			'height': 'auto',
		}
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
					<img style={imageStyle.img} src = {imageUrl}/>
				</div>
				<h4 style={nameStyle}>{name}</h4>
				<p style={priceStyle}>{price}</p>
			</div>
		);
	}
}
