import React, { Component } from 'react';
import { string, shape, arrayOf } from 'prop-types';
import Tile from '../Tile/Tile';
import Navbar from '../Navbar/Navbar';
import './Tiles.css';

const applySearch = (search) => (
	(obj) => Object.assign({}, obj, { search })
)

const copyModel = (model) => (
	JSON.parse(JSON.stringify(model))
		.map(({ ...properties }, index) => ({ ...properties, index }))
);

class Tiles extends Component {
	static propTypes = {
		/**
		 * Name to be displayed on the component's navbar.
		 */
		brand: string,
		/**
		 * Data to be displayed.
		 */
		model: arrayOf(shape({
			name: string,
			entries: arrayOf(shape({
				description: string.isRequired,
				externalURL: string
			}))
		}))
	}
	constructor(props) {
		super(props);
		this.model = copyModel(props.model);
		const tilesList = this.model
			.map(() => false);
		this.brand = props.brand;
		this.state = {
			search: "",
			tileIsPinned: tilesList
		};
	}

	makeTile = ({ index, ...props }) => {
		return (
			<div className="tiles_container" key={`/${index}`}>
				<Tile
					index={index}
					id={`/${index}`}
					{...props}
					toggle={this.togglePinned.bind(this, index)}
					pinned={this.state.tileIsPinned[index]} />
			</div>
		)
	}

	updateSearch = (e) => {
		const search = e.target.value.toLowerCase();
		this.setState({ search });
	}

	togglePinned(index) {
		const newStatus = this.state.tileIsPinned
			.map((val, i) => i === index ? !val : val);
		this.setState(Object.assign(
			{}, this.state, { tileIsPinned: newStatus }
		));
	}

	/**
	 * A tile is displayed if it's pinned or if its name contains the search term.
	 */
	filterTiles = (search) => (
		({ name, index }) => (
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
