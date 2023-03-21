import axios from "axios";
import { useState, useEffect } from "react";
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState(null)
  const [input, setInput] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const filterCountries = (countries, regex) => {
    if (!countries) return null
    if (regex.source === '(?:)') return countries
    return countries.filter(country => regex.test(country.name.common))
  }

  const countriesToShow = filterCountries(countries, new RegExp(input, 'i'))
  //handlers
  const handleInput = (event) => {
    setInput(event.target.value)
  }

  return (
    <>
    <Filter value={input} onChange={handleInput}/>
    <Countries countries={countriesToShow} input={input}/>
    </>
  )
}

export default App;
