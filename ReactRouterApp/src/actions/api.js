



import axios from 'axios'



const apiKey = '?key=0xo0xo0xoadra0xo0xo0'
const rootUrl = 'http://reduxblog.herokuapp.com/api'

export const postsFetch = 'fetch-posts'
export const postCreate = 'create-post'
export const postGrab = 'grab-post'


export function fetchPosts( ) {
	const posts = axios.get( `${ rootUrl }/posts${ apiKey }` )
	return {
		type: postsFetch,
		payload: posts
	}
}

export function createPost( values, callback ) {
	const post = axios.post( `${ rootUrl }/posts${ apiKey }`, values )
		// Wait until http request is complete, then execute callback
		.then( ( ) => callback( ) )
	return {
		type: postCreate,
		payload: post
	}
}

export function grabPost( id ) {
	const post = axios.get( `${ rootUrl }/posts/${ id }${ apiKey }` )
	return {
		type: postGrab,
		payload: post
	}
}


