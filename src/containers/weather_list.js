import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GooglMap from '../components/google-map';
const WeatherList = (props)=>{
    const renderWeather= function(cityData){
        const temps = cityData.list.map((weather)=>weather.main.temp);
        const pressures = cityData.list.map((weather)=>weather.main.pressure);
        const humidities = cityData.list.map((weather)=>weather.main.humidity);
        return (
            <tr key = {cityData.city.id} >
                <td><GooglMap lat= {cityData.city.coord.lat} lng= {cityData.city.coord.lon}/></td>
                <td>
                    <Chart data={temps} color='orange' unit= "K" />
                </td>
                <td>
                    <Chart data={pressures} color='green' unit= "hPa" />                    
                </td>
                <td>
                    <Chart data={humidities} color='black' unit= "%" />                    
                </td>
            </tr>
        )
    };
    return (
        <table className="table table-hover weather-table" >
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                { props.weather.map(renderWeather) }
            </tbody>
        </table>
    );
}

export default connect( (state)=>({weather:state.weather}) )(WeatherList);