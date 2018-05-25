



export function selectBook( book ) {
	// selectBookis an action creator, returning an action with a type property
	return {
		type: 'selected',
		payload: book
	}
}


