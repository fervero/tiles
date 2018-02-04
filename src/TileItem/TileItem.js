import React from 'react';
import './TileItem.css';

function TileItem(props) {
	if (props.externalURL) {
		return (
			<li className="list-group-item">
				<a href={props.externalURL}>{props.description}</a>
			</li>)
	} else {
		return (
			<li className="list-group-item">
				{props.description}
			</li>)
	}
}

export default TileItem;
