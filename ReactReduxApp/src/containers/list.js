



import React, { Component } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { connect } from 'react-redux'



class List extends Component {
	
	renderWeather( data ) {
		const name = data.city.name
		const temps = data.list.map( weather => weather.main.temp )
		return (
			<tr key={ name }>
				<td>{ name }</td>
				<td>
					<Sparklines height={ 60 } width={ 180 } data={ temps }>
						<SparklinesLine color="blue"/>
					</Sparklines>
				</td>
			</tr>
		)
	}
	
	render( ) {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th> City </th>
						<th> Temperature </th>
						<th> Pressure </th>
						<th> Humidity </th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map( this.renderWeather ) }
				</tbody>
			</table>
		)
	}
	
}


// ES6 shortcut for grabbing state's weather property
function mapStateToProps( { weather } ) {
	return { weather }
}


export default connect( mapStateToProps )( List )


