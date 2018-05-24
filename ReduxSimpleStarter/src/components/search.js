



import React, { Component } from 'react'



class Search extends Component {
	
	constructor( props ) {
		super( props )
		this.state = { term: '' }
	}
	
	
	onInputChange( event ) {
		this.setState( { term: event.target.value } )
	}
	
	render( ) {
		return (
			<div className="search-bar">
				<input value={ this.state.term } onChange={ event => this.onInputChange( event ) }/>
				<br/>
				Value of the input: { this.state.term }
			</div>
		)
	}
	
}


export default Search



