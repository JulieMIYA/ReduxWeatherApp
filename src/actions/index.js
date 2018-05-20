const API_KEY = '06987af6236ada6254fb0ab0110495fb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('request' , request);
    return { 
        type : FETCH_WEATHER,
        payload : request
    }
}