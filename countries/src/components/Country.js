import { useState, useEffect } from "react"
import axios from "axios"
import Weather from './Weather'

const Country = ({country, showing=false}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [show, setShow] = useState(showing)
    const [weather, setWeather] = useState(null)
    const message = show? 'hide' : 'show'
    const handleShow = () => setShow(!show)
    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}&units=metric`)
        .then(response => {setWeather(response.data)})
    })
    if (!show) {
        return (
            <div>
                {country.name.common} <button onClick={handleShow}>{message}</button>
            </div>
        )
    }

    const languages = []
    for (const property in country.languages) languages.push(country.languages[property])
    return (
        <div>
            <h1>{country.name.common}
                <button onClick={handleShow}>{message}</button>
            </h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            {languages.map((language, i) => <li key={i}>{language}</li>)}
            <img src={country.flags.png} alt={country.flags.alt}/>
            <Weather weather={weather} city={country.capital[0]}/>
        </div>
    )
}

export default Country