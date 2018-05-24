



import React, { Component } from 'react'
import Search from './components/search'
import List from './components/list'
import Detail from './components/detail'
import youtube from 'youtube-api-search'
import _ from 'lodash'
import '../public/style.css'



const key = 'AIzaSyD4XgV-Xd0ZGu5w7Ds7o4FeDfvgU8w8lV0'


class App extends Component {
	
	constructor( props ) {
		super( props )
		this.state = {
			videos: [ ],
			selected: null
		}
		this.videoSearch( 'lizards' )
	}
	
	
	videoSearch( term ) {
		youtube( { key: key, term: term }, videos => {
			// ES6 shortcut to assign keys and values with same variable name
			this.setState( {
				videos: videos,
				selected: videos[ 0 ]
			} )
		} )
	}
	
	render( ) {
		const videoSearch = _.debounce( term => { this.videoSearch( term ) }, 300 )
		return (
			<div>
				<Search onSearchTermChange={ videoSearch }/>
				<Detail video={ this.state.selected }/>
				<List videos={ this.state.videos } onVideoSelect={ selected => this.setState( { selected } ) }/>
			</div>
		)
	}
	
}


export default App



