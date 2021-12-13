import React from 'react'
import styled from 'styled-components'
const WeatherInfoIcons = {
    sunset: "temp.svg",
    sunrise: "temp.svg",
    humidity: "humidity.svg",
    wind: "wind.svg",
    pressure: "pressure.svg"
};
const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px auto;
`;
const Condition = styled.div`
    margin: 2px auto;
    font-size: 18px;
    & span{
        font-size: 28px;
    }
`;
const Location = styled.div`
    font-size: 28px;
    font-weight: bold;
`;
const WeatherLogo = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px auto;
`;
const WeatherInfoLabel = styled.div`
    width: 90%;
    text-align: left;
    font-size: 18px;
    font-weight:bold;
    margin: 20px 25px 18px;
`;
const WeatherInfoContainer = styled.div`
    width: 100%;
    /* display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap; */
    display:grid;
    grid-template-columns: 1fr 1fr;
`;
const InfoContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 2fr;
`;
const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
    margin: auto;
`;
const InfoLabel = styled.span`
    display:flex;
    flex-direction: column;
    font-size: 18px;
    margin:15px;
    & span{
        font-size: 16px;
        text-transform: capitalize;
    }
`
const WeatherInfoComponent = (props) => {
    const { name, value } = props;
    return (
        <InfoContainer>
            <InfoIcon src={`./icons/${WeatherInfoIcons[name]}`} />
            <InfoLabel>
                <span>{value?value:"--:--"}</span>
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    )
}
const WeatherComponent = (props) => {
    const { weather, removeWeather } = props;
    const isDay = weather?.weather[0].icon?.includes("d");
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`;
    }
    return (
        <>
            <WeatherCondition>
                <Condition>
                    <span>{Math.floor(weather?.main?.temp - 273)} &#8451;</span> | {weather?.weather[0].description}
                </Condition>
                <WeatherLogo src="./icons/perfect-day.svg" />
            </WeatherCondition>
            <Location>{weather?.name}, {weather.sys.country}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent
                    name={isDay ? "sunset" : "sunrise"}
                    value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
                />
                <WeatherInfoComponent name="humidity" value={weather?.main?.himidity} />
                <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
                <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
            </WeatherInfoContainer>
            <button
                onClick={() => removeWeather()}
                style={{
                    margin: "10px",
                    padding: "10px",
                    'font-size': '18px',
                    color: 'white',
                    background: 'black',
                    border: 'none',
                    outline: 'none',
                    'font-weight': 'bold',
                    cursor:'pointer',
                }}
            >
            Search Another
        </button>
        </>
    )
}

export default WeatherComponent
