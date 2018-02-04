import React from 'react';
import './Tile.css';
import TileItem from '../TileItem/TileItem';
import { CSSTransitionGroup } from 'react-transition-group';
import { PinIcon } from 'react-octicons'

const filterItems = (search) => (
	({ description }) => description.toLowerCase().includes(search)
)


function Tile(props) {
	const makeRow = ({ id, externalURL, description }, index) => (
		<TileItem key={`${props.id}/${index}`} externalURL={externalURL} description={description} />
	);
	const btnStyling = props.pinned ? " btn-dark" : "";
	return (
		<section className="tile">
			<div className="list-group-header">
				<h2 className="tile__header">{props.name}</h2>
				<button className={"btn tile__btn" + btnStyling} onClick={props.toggle}><PinIcon /></button>
			</div>
			<ul className="list-group list-group-flush">
				<CSSTransitionGroup
					transitionName="item__transition"
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}>
					{props.entries
						.filter(filterItems(props.search))
						.map(makeRow)}
				</CSSTransitionGroup>
			</ul>
		</section>
	)
}

export default Tile;
