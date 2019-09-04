import React, { useState } from 'react'
import Filter from './Filer'
import PersonForm from './PersonForm'
import Numbers from './Numbers'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterVal, setFilter ] = useState('')
  const handleNameChange = (event)=>{
      setNewName(event.target.value);
  }
  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value);
}
const handleFilterChange = (event)=>{
    setFilter(event.target.value);
}
  const handleSubmit = (event)=>{
      event.preventDefault()
      persons.find((person)=>person.name===newName)?(alert(`${newName} is already in phonebook`)):(setPersons(persons.concat({name:newName,number:newNumber})))
      setNewName('')
      setNewNumber('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterVal={filterVal} handleFilterChange={handleFilterChange} />
      <h2> add new </h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Numbers persons={persons} filterVal={filterVal} />
    </div>
  )
}

export default App