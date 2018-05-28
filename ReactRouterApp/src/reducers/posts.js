



import _ from 'lodash'

import { postsFetch } from '../actions/api'



export default function( state = {  }, action ) {
	switch ( action.type ) {
		case postsFetch:
			return _.mapKeys( action.payload.data, 'id' )
		default:
			return state
	}
}



