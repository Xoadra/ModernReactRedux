



import React from 'react'
import Item from './item'



const List = ( props ) => {
	const items = props.videos.map( video => {
		return <Item key={ video.etag } video={ video } onVideoSelect={ props.onVideoSelect }/>
	} )
	return (
		<ul className="col-md-4 list-group">
			{ items }
		</ul>
	)
}


export default List



