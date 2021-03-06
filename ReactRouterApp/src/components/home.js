



import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchPosts } from '../actions/api'



class Home extends Component {
	
	// Executes immediately after the Home component finishes rendering
	componentDidMount( ) {
		this.props.fetchPosts( )
	}
	
	renderPosts( ) {
		return _.map( this.props.posts, post => {
			return (
				<li key={ post.id } className="list-group-item">
					<Link to={ `/posts/${ post.id }` }>
						{ post.title }
					</Link>
				</li>
			)
		} )
	}
	
	render( ) {
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add a Post
					</Link>
				</div>
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



