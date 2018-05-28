



import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import Home from './elements/home'
import reducers from './reducers/root'
import '../public/style.css'



const createStoreWithMiddleware = applyMiddleware( promise )( createStore )


ReactDOM.render(
	<Provider store={ createStoreWithMiddleware( reducers ) }>
		<BrowserRouter>
			<div>
				<Route path="/" component={ Home }/>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById( 'root' )
)



