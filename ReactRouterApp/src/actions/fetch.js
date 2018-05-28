



import axios from 'axios'



const apiKey = '?key=0xo0xo0xoadra0xo0xo0'
const rootUrl = 'http://reduxblog.herokuapp.com/api'

export const postsFetch = 'fetch-posts'


export function fetchPosts( ) {
	const posts = axios.get( `${ rootUrl }/posts${ apiKey }` )
	return {
		type: postsFetch,
		payload: posts
	}
}


