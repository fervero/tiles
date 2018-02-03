import React, { Component } from 'react';
import Tile from '../Tile/Tile';
import Navbar from '../Navbar/Navbar';
import './Tiles.css';

const makeTile = ({ name, entries, search }) => (
	<div className="tiles_container" key={name}>
		<Tile name={name} entries={entries} search={search} />
	</div>
)

const filterTiles = (search) => (
	({ name }) => name.toLowerCase().includes(search)
)

const applySearch = (search) => (
	(obj) => Object.assign({}, obj, { search })
)

class Tiles extends Component {
	constructor(props) {
		super(props);
		this.model = JSON.parse(JSON.stringify(props.model));
		this.brand = props.brand;
		this.state = { search: "" };
		this.updateSearch = this.updateSearch.bind(this);
	}

	updateSearch(e) {
		const search = e.target.value.toLowerCase();
		this.setState({ search });
	}

	render() {
		return (
			<div className="container">
				<Navbar brand={this.brand} updateSearch={this.updateSearch} />
				<div className="row">
					{this.model
						.filter(filterTiles(this.state.search))
						.map(applySearch(this.state.search))
						.map(makeTile)}
				</div>
			</div>
		)
	}
}

export default Tiles;
