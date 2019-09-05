import React,{useState} from 'react'
import axios from 'axios'
import Find from './Find'
import Countries from './Countries'

const App = ()=>{
  const [filter,setFilter] = useState("")
  const [countries,setCountries] = useState([])
  const getCountries = (filter)=>{
      console.log("called",filter)
      if(filter!=="")
      {
        axios
        .get("https://restcountries.eu/rest/v2/name/"+filter)
        .then(response=>{
          if(response.status===404)
          setCountries([])
          else
          setCountries(response.data);
        })
        .catch(err=>setCountries([]))
      }
      else
      setCountries([])
  }
  const handleChange = (event)=>{
    const newVal = event.target.value
    setFilter(newVal)
    getCountries(newVal)
  }
  const handleClick = (val)=>{
    const newVal = val
    setFilter(newVal)
    getCountries(newVal)
  }
  //useEffect(getCountries,[])
  return (<div>
    <Find filter={filter} handleChange={handleChange}/>
    <Countries countries={countries} filter={filter} setFilter={handleClick}/>
  </div>)
}

export default App;
