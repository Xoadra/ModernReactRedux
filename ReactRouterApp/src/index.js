



import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import Home from './components/home'
import New from './components/new'
import Show from './components/show'
import reducers from './reducers/root'
import '../public/style.css'



const createStoreWithMiddleware = applyMiddleware( promise )( createStore )


ReactDOM.render(
	<Provider store={ createStoreWithMiddleware( reducers ) }>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/posts/new" component={ New }/>
					<Route path="/posts/:id" component={ Show }/>
					<Route path="/" component={ Home }/>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById( 'root' )
)



