



import React, { Component } from 'react'



class Search extends Component {
	
	constructor( props ) {
		super( props )
		this.state = { term: '' }
	}
	
	
	onInputChange( term ) {
		this.setState( { term } )
		this.props.onSearchTermChange( term )
	}
	
	render( ) {
		return (
			<div className="search-bar">
				<input value={ this.state.term } onChange={ event => this.onInputChange( event.target.value ) }/>
				<br/>
				Value of the input: { this.state.term }
			</div>
		)
	}
	
}


export default Search


