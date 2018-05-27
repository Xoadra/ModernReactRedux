



import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchWeather } from '../actions/fetch'



class Search extends Component {
	
	constructor( props ) {
		super( props )
		this.state = { term: '' }
		this.onInputChange = this.onInputChange.bind( this )
		this.onFormSubmit = this.onFormSubmit.bind( this )
	}
	
	
	onInputChange( event ) {
		this.setState( { term: event.target.value } )
	}
	
	onFormSubmit( event ) {
		// Prevents page reloads from any form submissions
		event.preventDefault( )
		this.props.fetchWeather( this.state.term )
		// Clear the form input content after search activation
		this.setState( { term: '' } )
	}
	
	render( ) {
		return (
			<form className="input-group" onSubmit={ this.onFormSubmit }>
				<input
					className="form-control"
					placeholder="Get a five day forecast of your chosen cities!"
					value={ this.state.term }
					onChange={ this.onInputChange }
				/>
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">
						Submit
					</button>
				</span>
			</form>
		)
	}
	
}


function mapDispatchToProps( dispatch ) {
	return bindActionCreators( { fetchWeather }, dispatch )
}


// First null argument indicates that state is not used here
export default connect( null, mapDispatchToProps )( Search )



