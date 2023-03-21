import Country from './Country'
const Countries = ({countries, input}) => {
    if (!countries) return
    if (input === '') return <div>start typing to show countries</div>
    if (countries.length > 10) return <div>too many matches, specify another filter</div>
    if (countries.length === 1) return <Country country={countries[0]} showing='true'/>
    return countries.map(country => <Country key={country.name.official} country={country}/>)
    

    return (
        countries.map(country => <div key={country.name.official}>{country.name.common}</div>)
    )
}

export default Countries