



import React, { Component } from 'react'

import Search from './containers/search'
import List from './containers/list'
import '../public/style.css'



class App extends Component {
	
	render( ) {
		return (
			<div>
				<Search/>
				<List/>
			</div>
		)
	}
	
}


export default App


