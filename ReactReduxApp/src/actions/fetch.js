



import axios from 'axios'



const apiKey = '9c5249cf045d0c23179efdaa1db6d65a'
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${ apiKey }`

export const weatherFetch = 'fetch-weather'


export function fetchWeather( city ) {
	const url = `${ rootUrl }&q=${ city },us`
	const data = axios.get( url )
	console.log( 'Action fired with payload data:', data )
	return {
		type: weatherFetch,
		payload: data
	}
}


