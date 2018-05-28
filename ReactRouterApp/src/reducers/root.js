



import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

import postsReducer from './posts'



const rootReducer = combineReducers( {
	form: formReducer,
	posts: postsReducer
} )


export default rootReducer



