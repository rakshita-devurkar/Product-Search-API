import React from 'react';
import './style.css';

export default class Product extends React.Component {
	// renderImage(imageUrl) {
	// 	return (
	// 		<div>
	// 		<img src = {imageUrl} />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="gallery">
	// 		<div className="images">
	// 			{this.props.allProducts.map(imageUrl => this.renderImage(imageUrl))}

	// 		</div>
	// 		</div>
	// 	)
	// }

	render() {
		let imageUrl = this.props.imageUrl;
		let name = this.props.name;
		let price = this.props.price;

		return (
			<div className = "product">
				<div className = "product-image">
					<img src = {imageUrl}/>
				</div>
				<h4 className="product-name"> {name} </h4>
				<p className="product-price"> {price} </p>
			</div>
		)
	}
}

// Product.propTypes = {
// 	imageUrls : React.PropTypes.arrayOf(React.PropTypes.string).isRequired
// };

