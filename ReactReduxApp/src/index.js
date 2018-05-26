



import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './app'
import reducers from './reducers/root'



const createStoreWithMiddleware = applyMiddleware( )( createStore )


ReactDOM.render(
	<Provider store={ createStoreWithMiddleware( reducers ) }>
		<App/>
	</Provider>,
	document.getElementById( 'root' )
)


