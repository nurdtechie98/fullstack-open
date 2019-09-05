import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Languages = ({languages})=>{
    return languages.map(language=><li key={language.name}>{language.name}</li>)
}
const Weather = ({place})=>{
    const [weather,setWeather] = useState({})
    const getWeather= ()=>{
        axios
        .get("http://api.apixu.com/v1/current.json?key=99d52aa54b3b4725b6b191042190509&q="+place)
        .then((response)=>{
            console.log(response.data)
            setWeather(response.data)
        })
    }
    useEffect(getWeather,[])
    console.log(weather)
    if(Object.keys(weather).length !== 0)
    {
        return (
            <div>
                <p>temperature: {weather.current.temp_c} degree celicius</p> <br/>
                <img alt={weather.current.condition.text} src={weather.current.condition.icon} />
                <p>wind: {weather.current.wind_kph} direction {weather.current.wind_dir}</p>
            </div>
        )
    }
    else
    {
        return (<div></div>)
    }
}
const Countries = ({countries,filter,setFilter})=>{
    if(filter==="" || countries.length>10)
    {
        return(
            <div>
                Too many matches specify another filter
            </div>
        )
    }
    else if(countries.length>1)
    {
        return countries.map((country)=><div key={country.name}><p>{country.name}</p><button onClick={()=>setFilter(country.name)}>show</button></div>
    )
    }
    else if(countries.length===1)
    {
        return (
        <div>
            <h1>{countries[0].name}</h1>
            <p>Capital: {countries[0].capital}</p>
            <p>Populaion: {countries[0].population}</p>
            <h2> Languages </h2>
            <ul>
            <Languages languages={countries[0].languages}/>
            </ul>
            <img width="100" alt={countries.name} src={countries[0].flag} />
            <h1>Weather in {countries[0].capital}</h1>
            <Weather place={countries[0].capital} />
        </div>
        )
    }
    else
    return <p>no  matching country found </p>
}

export default Countries