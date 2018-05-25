



import React, { Component } from 'react'
import { connect } from 'react-redux'



class List extends Component {
	
	fillList( ) {
		return this.props.books.map( book => {
			return (
				<li key={ book.title } className="list-group-item">{ book.title }</li>
			)
		} )
	}
	
	render( ) {
		return (
			<ul className="list-group col-sm-4">
				{ this.fillList( ) }
			</ul>
		)
	}
	
}


function mapStateToProps( state ) {
	// Will show up as props inside of List container component
	return { books: state.books }
}


export default connect( mapStateToProps )( List )


