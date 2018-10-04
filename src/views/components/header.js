import React from 'react';

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
	backgroundImage: 'url(search.png)',
    backgroundRepeat: 'no-repeat',
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
	color: '#81adf4',
}

export default class Header extends React.Component {

	constructor(props) {
		super();
		this.state = {
			keyword: '',	
		}

	}
	render() {
			return (
				<div style={header}>
							<div style={search}>
								<div>
									<input style={searchBar} type="search" ref="searchBar" placeholder="Enter product name"/>
              					</div>
              					<div>
              						<button style={searchButton} type="submit">Search</button>
              					</div>
              				</div>
				</div>
			); 
	}
}