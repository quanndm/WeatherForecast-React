import React from 'react'
import styled from 'styled-components'
import logo from "../perfect-day.svg";
const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;
const ChooseCityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`;
const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    border-radius: 2px;
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 20px auto;
    & input{
        padding: 10px;
        font-size: 18px;
        border: none;
        outline: none; 
        font-weight: bold;
    }
    & button{
        padding: 10px;
        font-size: 18px;
        color: white;
        background: black;
        border: none;
        outline: none; 
        font-weight: bold;
        cursor:pointer;
    }
`;
const CityComponent = (props) => {
    const {setCity, fetchWeather} = props;
    return (
        <>
            <WeatherLogo src={logo}/>
            <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input type="text" placeholder="City" onChange={(e)=>setCity(e.target.value)}/>
                <button>Search</button>
            </SearchBox>
        </>
    )
}

export default CityComponent
