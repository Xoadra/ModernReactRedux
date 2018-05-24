



import React, { Component } from 'react'
import Search from './components/search'
import youtube from 'youtube-api-search'



const key = 'AIzaSyD4XgV-Xd0ZGu5w7Ds7o4FeDfvgU8w8lV0'


class App extends Component {
	
	constructor( props ) {
		super( props )
		this.state = { videos: [ ] }
		youtube( { key: key, term: 'lizards' }, videos => {
			// ES6 shortcut to assign keys and values with same variable name
			this.setState( { videos } )
		} )
	}
	
	
	render( ) {
		return (
			<div>
				<Search/>
			</div>
		)
	}
	
}


export default App


