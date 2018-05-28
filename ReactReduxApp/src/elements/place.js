



import React, { Component } from 'react'



class Place extends Component {
	
	componentDidMount( ) {
		// Embeds map into referenced HTML tag after component renders
		new google.maps.Map(
			this.refs.map,
			{
				zoom: 12,
				center: {
					lat: this.props.lat,
					lng: this.props.lon
				}
			}
		)
	}
	
	render( ) {
		return (
			<div ref="map"/>
		)
	}
	
}


export default Place



