



import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/fetch'



class Home extends Component {
	
	render( ) {
		return (
			<div> Home </div>
		)
	}
	
}


// Shortcut via ES6 when returning is all that mapDispatchToProps does
export default connect( null, { fetchPosts } )( Home )



