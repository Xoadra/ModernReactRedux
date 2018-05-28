



import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './elements/home'
import '../public/style.css'



ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/" component={ Home }/>
		</div>
	</BrowserRouter>,
	document.getElementById( 'root' )
)


