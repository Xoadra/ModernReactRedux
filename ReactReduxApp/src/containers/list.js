



import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Chart from '../elements/chart'
import Place from '../elements/place'



class List extends Component {
	
	renderWeather( data ) {
		const name = data.city.name
		const temps = _.map(
			data.list.map( weather => weather.main.temp ),
			// Converting from degrees in Kelvin to Fahrenheit
			temp => ( ( temp * ( 9 / 5 ) ) - 459.67 )
		)
		const pressures = data.list.map( weather => weather.main.pressure )
		const humidities = data.list.map( weather => weather.main.humidity )
		// Define new values from source properties via ES6
		const { lat, lon } = data.city.coord
		return (
			<tr key={ name }>
				<td><Place lat={ lat } lon={ lon }/></td>
				<td><Chart data={ temps } color="red" units="&deg;F"/></td>
				<td><Chart data={ pressures } color="lightgreen" units="hPa"/></td>
				<td><Chart data={ humidities } color="blue" units="%"/></td>
			</tr>
		)
	}
	
	render( ) {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th> City </th>
						<th> Temperature (&deg;F) </th>
						<th> Pressure (hPa) </th>
						<th> Humidity (%) </th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map( this.renderWeather ) }
				</tbody>
			</table>
		)
	}
	
}


// An ES6 shortcut for grabbing state's weather property
function mapStateToProps( { weather } ) {
	return { weather }
}


export default connect( mapStateToProps )( List )



