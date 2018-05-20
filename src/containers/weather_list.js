import React from 'react';
import { connect } from 'react-redux';

const WeatherList = (props)=>{
    const renderWeatherRow = function(weatherItem){
        return (
            <tr key = {weatherItem.city.id} >
                <td>{weatherItem.city.name}</td>
                <td>{weatherItem.list[0].main.temp}</td>
                <td>{weatherItem.list[0].main.pressure}</td>
                <td>{weatherItem.list[0].main.humidity}</td>
            </tr>
        )
    };
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                { props.weather.map(renderWeatherRow) }
            </tbody>
        </table>
    );
}

export default connect( (state)=>({weather:state.weather}) )(WeatherList);