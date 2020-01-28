import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
    WINDY
} from '../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "cfd24237b9a7e19978fa27ec0686fe88"
const url_base_wheather = "api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_wheather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}
const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 12,
    wind: '10 m/s',
}


class WeatherLoaction extends Component {
    constructor(){
        super();
        this.state = {
            city:'Buenos Aires',
            data: data,
        };
    }
    handlerUpdateClick = () => {
        fetch(api_weather).then(data => {
           console.log(data, "Data")
            return data.json();
        }).then(data => {
            console.log(data);
            debugger;
        });

        console.log('Actualizado');
        this.setState({
            data: data2,
        });
    }

    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handlerUpdateClick}>Actualizar</button>
            </div>
        );
    }

};

export default WeatherLoaction;