import React from 'react';
import './Navbar.css';

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<span className="navbar-brand" href="#">{props.brand}</span>
			<form className="form-inline my-2 my-lg-0 tiles__search">
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.updateSearch} />
			</form>
		</nav>
	)
}

export default Navbar;
