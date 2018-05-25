



// State argument is only the state this reducer is responsible for
export default function( state = null, action ) {
	switch( action.type ) {
		case 'selected':
			return action.payload
	}
	return state
}



