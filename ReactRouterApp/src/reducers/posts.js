



import _ from 'lodash'

import { postsFetch, postGrab } from '../actions/api'



export default function( state = {  }, action ) {
	switch ( action.type ) {
		case postsFetch:
			return _.mapKeys( action.payload.data, 'id' )
		case postGrab:
			// Older method for assigning a key to the returned object
			/* const post = action.payload.data
			const newState = { ...state }
			newState[ post.id ] = post
			return newState */
			// ES6 option to set the object's key using key interpolation
			// Bracketed value is set as this object's payload data key
			return { ...state, [ action.payload.data.id ]: action.payload.data }
		default:
			return state
	}
}


