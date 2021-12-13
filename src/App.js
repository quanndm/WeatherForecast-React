import React, { useState } from 'react'
import styled from 'styled-components'
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';
import axios from 'axios';
const API_KEY = "47510f1ef1f4678f04581e2765857e4b";
const Container = styled.div`
    display:flex;
    flex-direction:column;   
    margin: auto;
    align-items:center;
    box-shadow: 0 3px 6px 0 #555;
    padding: 20px 10px;
    border-radius: 5px;
    width: 500px;
    background: white;
`;
const AppLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
`;
const App = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const fetchWeather = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            setWeather(response.data);
        } catch (error) {
            alert(`City:"${city}" not found!`);
        }
    }
    const removeWeather = ()=>{
        setWeather(null);
    }
    return (
        <Container>
            <AppLabel>
                React Weather App
            </AppLabel>
            {
                weather
                ?<WeatherComponent weather={weather} removeWeather={removeWeather}/>
                :<CityComponent setCity={setCity} fetchWeather={fetchWeather}/>
            }
        </Container>
    )
}

export default App
