



import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchPosts } from '../actions/fetch'



class Home extends Component {
	
	// Executes immediately after the Home component finishes rendering
	componentDidMount( ) {
		this.props.fetchPosts( )
	}
	
	renderPosts( ) {
		return _.map( this.props.posts, post => {
			return (
				<li key={ post.id } className="list-group-item">
					{ post.title }
				</li>
			)
		} )
	}
	
	render( ) {
		console.log( this.props.post )
		return (
			<div>
				<h3> Posts </h3>
				<ul className="list-group">
					{ this.renderPosts( ) }
				</ul>
			</div>
		)
	}
	
}


function mapStateToProps( state ) {
	return { posts: state.posts }
}


// Shortcut using ES6 when returning is all that mapDispatchToProps does
export default connect( mapStateToProps, { fetchPosts } )( Home )


