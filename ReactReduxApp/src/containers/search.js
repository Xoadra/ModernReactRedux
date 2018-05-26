



import React, { Component } from 'react'



class Search extends Component {
	
	constructor( props ) {
		super( props )
		this.state = { term: '' }
		this.onInputChange = this.onInputChange.bind( this )
	}
	
	
	onFormSubmit( event ) {
		// Prevents page reloads from form submissions
		event.preventDefault( )
	}
	
	onInputChange( event ) {
		this.setState( { term: event.target.value } )
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


export default Search



