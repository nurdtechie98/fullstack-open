import React from 'react'

const Numbers = ({persons,filterVal,deleteEntry})=>persons.filter((person)=>(person.name).includes(filterVal)).map((person)=><li key={person.id}>{person.name} {person.number} <button onClick={()=>deleteEntry(person.id)}>delete</button></li>)

export default Numbers