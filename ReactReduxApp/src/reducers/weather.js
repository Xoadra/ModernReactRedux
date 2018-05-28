



import { weatherFetch } from '../actions/fetch'



export default function( state = [ ], action ) {
	switch ( action.type ) {
		case weatherFetch:
			console.log( 'Reducer fired with action result:', action )
			// Don't try to mutate state by doing this
			/* return state.push( action.payload.data ) */
			// This is supposedly a better alternative
			/* return state.concat( [ action.payload.data ] ) */
			// Another option using newer ES6 syntax
			/* return [ action.payload.data, ...state ] */
			return [ action.payload.data ].concat( state )
	}
	return state
}



