import React, { Component } from 'react';
import Tile from '../Tile/Tile';
import Navbar from '../Navbar/Navbar';
import './Tiles.css';

const applySearch = (search) => (
	(obj) => Object.assign({}, obj, { search })
)

class Tiles extends Component {
	constructor(props) {
		super(props);
		this.model = JSON.parse(JSON.stringify(props.model));
		const tilesList = this.model
			.map(() => false);
		this.brand = props.brand;
		this.state = {
			search: "",
			tileIsPinned: tilesList
		};
		this.updateSearch = this.updateSearch.bind(this);
		this.togglePinned = this.togglePinned.bind(this);
		this.makeTile = this.makeTile.bind(this);
	}

	makeTile = ({ name, entries, search }, index) => (
		<div className="tiles_container" key={name}>
			<Tile name={name} entries={entries} search={search} toggle={this.togglePinned} pinned={this.state.tileIsPinned[index]}/>
		</div>
	)

	updateSearch(e) {
		const search = e.target.value.toLowerCase();
		this.setState({ search });
	}

	togglePinned(tileName) {
		const foundTile = this.model
			.findIndex(({ name }) => name === tileName);
		const newStatus = this.state.tileIsPinned
			.map((val, i) => i === foundTile ? !val : val);
		this.setState(Object.assign(
			{}, this.state, { tileIsPinned: newStatus }
		));
		setTimeout(() => console.log(this.state), 50);
	}

	/**
	 * Tiles stays on display if it's pinned or if its name contains the search term.
	 */
	filterTiles = (search) => (
		({ name }, index) => (
			name.toLowerCase().includes(search.toLowerCase())
		) || (this.state.tileIsPinned[index])
	)

	render() {
		const search = this.state.search;
		return (
			<div className="container">
				<Navbar brand={this.brand} updateSearch={this.updateSearch} />
				<div className="row">
					{this.model
						.filter(this.filterTiles(search))
						.map(applySearch(search))
						.map(this.makeTile)}
				</div>
			</div>
		)
	}
}

export default Tiles;
