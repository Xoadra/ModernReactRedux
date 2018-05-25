



import { combineReducers } from 'redux'

import booksReducer from './books'
import activeReducer from './active'



const rootReducer = combineReducers( {
	books: booksReducer,
	active: activeReducer
} )


export default rootReducer



