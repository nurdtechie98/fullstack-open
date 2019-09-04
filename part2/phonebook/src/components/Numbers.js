import React from 'react'

const Numbers = ({persons,filterVal})=>persons.filter((person)=>(person.name).includes(filterVal)).map((person)=><li key={person.name}>{person.name} {person.number}</li>)

export default Numbers