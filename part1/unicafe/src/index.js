import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({name,val,setVal,all, setAll})=>{
    const setToVal = () => {
        setVal(val+1);
        setAll(all+1);
    }
    return(
    <button onClick={setToVal}>
        {name}
    </button>
    )
}
const Statistic = ({pref,val,post})=>(
    <tr>
        <td>{pref}</td> 
        <td>{val} {post}</td>
    </tr>
)
const Statistics = ({good,bad,neutral,all})=>{
    if(all===0){
        return (
        <div>
            No feedback given
        </div>
        )
    }
    return (
        <table>
            <tbody>
                <Statistic pref="good" val={good} />
                <Statistic pref="neutral" val={neutral} />
                <Statistic pref="bad" val={bad} />
                <Statistic pref="all" val={all} />
                <Statistic pref="average" val={(good-bad)/all} />
                <Statistic pref="positive" val={(good/all)*100} post="%" />
            </tbody>
        </table>
    )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" val={good} setVal={setGood} all={all} setAll={setAll}/>
      <Button name="neutral" val={neutral} setVal={setNeutral} all={all} setAll={setAll}/>
      <Button name="bad" val={bad} setVal={setBad} all={all} setAll={setAll}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)