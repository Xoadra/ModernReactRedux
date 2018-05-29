



import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { grabPost, deletePost } from '../actions/api'



class Show extends Component {
	
	componentDidMount( ) {
		const { id } = this.props.match.params
		this.props.grabPost( id )
	}
	
	onDeleteClick( ) {
		const { id } = this.props.match.params
		this.props.deletePost( id, ( ) => {
			this.props.history.push( '/' )
		} )
	}
	
	render( ) {
		const { post } = this.props
		if ( !post ) {
			return <div> Loading... </div>
		}
		return (
			<div>
				<Link className="btn btn-primary" to="/"> Home </Link>
				<button className="btn btn-danger pull-xs-right" onClick={ this.onDeleteClick.bind( this ) }>
					Delete
				</button>
				<h3 className="post-title"> { post.title } </h3>
				<h6> Categories: { post.categories } </h6>
				<p> { post.content } </p>
			</div>
		)
	}
	
}


function mapStateToProps( { posts }, ownProps ) {
	return { post: posts[ ownProps.match.params.id ] }
}


export default connect( mapStateToProps, { grabPost, deletePost } )( Show )


