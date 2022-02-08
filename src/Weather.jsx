import React, { useState, useEffect } from 'react';

 // to do create useState variable to store temperature
 // to do in jsx display temperature
 //to do once displayed, display without clicking button (done in line 21-23 of chuck norris example)
 // then convert kelvin to fahrenheit then celcius

const Weather = (props) => {
    const [temperature, setTemperature] = useState("Loading");
    const APIkey = '0612bf7b9f4f9c659b0ac1ed09a1c920'
    const lat = 39.768402
    const lon = -86.158066
    const [isFahrVisible, setisFahrVisible] = useState(true);
    let celsius = Math.floor (temperature - 273);
    let fahrenheit = Math.floor (celsius * (9/5) + 32);
    function handleToggle() {
        setisFahrVisible(!isFahrVisible)
    }
    async function fetchWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.main.temp);
            setTemperature(data.main.temp);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect (() => {
        fetchWeather()
    }, []);
    return ( <div>
        <h1>Hello From Weather</h1>
        {isFahrVisible === true ? <p>Temperature in Fahrenheit: {fahrenheit}</p> : <p>Temperature in Celsius: {celsius}</p>}
            <button id='tempType' onClick={(handleToggle)}>Click for Temp</button>
    </div> );
}



export default Weather;