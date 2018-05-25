



import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectBook } from '../actions/select'



class List extends Component {
	
	fillList( ) {
		return this.props.books.map( book => {
			return (
				<li key={ book.title } className="list-group-item" onClick={ ( ) => this.props.selectBook( book ) } >
					{ book.title }
				</li>
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
	// This will be assigned as props inside of the List container component
	return { books: state.books }
}

// Anything returned by this function becomes the props of List container
function mapDispatchToProps( dispatch ) {
	// When selectBook is called, it should be passed to all of the reducers
	return bindActionCreators( { selectBook: selectBook }, dispatch )
}


// Make List a container and set the selectBook action creator as its prop
export default connect( mapStateToProps, mapDispatchToProps )( List )


