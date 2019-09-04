import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  const [max, setMax] = useState([0,0])

  const nextAnectode = ()=>setSelected(Math.floor((Math.random()*100)%props.anecdotes.length))
  const vote = ()=>{
      var newVotes = [...votes]
      newVotes[selected]+=1
      console.log(newVotes)
      setVotes(newVotes)
      if(newVotes[selected]>=max[1])
      {
          let newMax = [selected,newVotes[selected]]
          setMax(newMax)
      }
  }
  return (
    <div>
        <h1>Anectode of the day </h1> 
        {props.anecdotes[selected]} 
        <br/>
        has {votes[selected]} votes
        <br/>
        <button onClick={nextAnectode}>
            next anecdote
        </button>
        <button onClick={vote}>
            vote
        </button>
        <h1>Anectode with most votes </h1> 
        {props.anecdotes[max[0]]} 
        <br/>
        has {max[1]} votes
        <br/>
    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)