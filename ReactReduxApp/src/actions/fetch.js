



import axios from 'axios'



const apiKey = '9c5249cf045d0c23179efdaa1db6d65a'
const rootUrl = `api.openweathermap.org/data/2.5/forecast?appid=${ apiKey }`

export const fetchWeather = 'fetch-weather'


export function fetchWeather( city ) {
	const url = `${ rootUrl }&q=${ city },us`
	const data = axios.get( url )
	return {
		type: fetchWeather,
		payload: data
	}
}



