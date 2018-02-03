import React from 'react';
import './Tile.css';
import TileItem from '../TileItem/TileItem';

const filterItems = (search) => (
	({ description }) => description.toLowerCase().includes(search)
)

const makeRow = ({...props}) => (
	<TileItem {...props} />
);

function Tile(props) {
	return (
		<section className="tile card">
			<h2 className="list-group-header">{props.name}</h2>
			<ul className="list-group list-group-flush">
				{props.entries
					.filter(filterItems(props.search))
					.map(makeRow)}
			</ul>
		</section>
	)
}

export default Tile;
