const Weather = ({weather, city}) => {
    if (!weather) return <></>
    return (
        <div>
            <h3>Weather in {city}</h3>
            <p>temperature {weather.main.temp} celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather