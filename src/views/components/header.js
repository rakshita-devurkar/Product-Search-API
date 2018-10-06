import React from 'react';

/*
TODO: Add the styling in a different file and bundle it with Webpack
*/

const header = {
	background: '#f6f6f6',
	position: 'fixed',
  	top: '0',
  	left: '0',
  	width: '100%',
	zIndex: '100',
	height: '10%',
	padding: '20px',
	textAlign:'center'
}

const search = {
	display: 'flex',
	flexDirection:'row',
	marginLeft:'20px'
}

const searchBar = {
	height: '40px',
    border: '1px solid black',
    borderRadius: '2px 0 0 2px',
	width: '500px'
}

const searchButton = {
    border: '0.5px solid black',
	borderRadius: '0 2px 2px 0',
    background: '#81adf4',
    width: '100px',
    height: '40px',
    marginLeft: '20px',
    textAlign:'center'
}

const title = {
	fontSize: '30px',
	fontWeight: '700',
	color: 'black',
}


export default class Header extends React.Component {

	/*This is the code for the Search Bar and the button that will be used once the server side rendering
	of React components to handle events is completed.

	constructor(props) {
		super(props);
		this.state = {
			keyword: '',	
		}
	}

	updateKeyword(e) {
		this.setState({keyword: e.target.value});
	}

	handleSearch(e){
		var searchWord = this.state.keyword;
		fetch('http://localhost:3000/product/'+searchWord, {
      		method: 'GET',
		});
	}

	render() {
			return (
			 	<div style={header}>
			 				<div style={search}>
			 					<div>
			 						<input style={searchBar} type="search" value={this.state.keyword} placeholder="Enter product name"
			 						onChange={this.updateKeyword.bind(this)}/>
               					</div>
               					<div>
               						<button style={searchButton} type="submit" onClick={this.handleSearch}>Search</button>
               					</div>
               				</div>
			 	</div>
			);
	}*/

	render() {
		return (
				<div style={header}>
				<h4 style={title}>Walmart Product Search</h4>
				</div>
			);
	}
}