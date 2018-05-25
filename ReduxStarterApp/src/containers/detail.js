



import React, { Component } from 'react'
import { connect } from 'react-redux'



class Detail extends Component {
	
	render( ) {
		if ( !this.props.book ) {
			return <div> Select a book! </div>
		}
		return (
			<div>
				<h3> Details for: </h3>
				<div> Title: { this.props.book.title } </div>
				<div> Pages: { this.props.book.pages } </div>
			</div>
		)
	}
	
}


function mapStateToProps( state ) {
	return {
		book: state.active
	}
}


export default connect( mapStateToProps )( Detail )


