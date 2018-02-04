import React from 'react';
import './Tile.css';
import TileItem from '../TileItem/TileItem';
import { CSSTransitionGroup } from 'react-transition-group';
import {PinIcon} from 'react-octicons'

const filterItems = (search) => (
	({ description }) => description.toLowerCase().includes(search)
)

const makeRow = ({ id, externalURL, description }) => (
	<TileItem key={id} externalURL={externalURL} description={description} />
);

function Tile(props) {
	function handleClick(e) {
		props.toggle(props.name);
	}
	console.log(props);
	const btnStyling = props.pinned ? " btn-dark" : "";
	return (
		<section className="tile">
			<div className="list-group-header">
				<h2 className="tile__header">{props.name}</h2>
				<button className={"btn tile__btn" + btnStyling} onClick={handleClick}><PinIcon /></button>
			</div>
			<ul className="list-group list-group-flush">
				<CSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={1500}
					transitionLeaveTimeout={1500}
				>
					{props.entries
						.filter(filterItems(props.search))
						.map(makeRow)}
				</CSSTransitionGroup>
			</ul>
		</section>
	)
}

export default Tile;
