import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>
        { props.title }
    </h1>
)

const Part = (props) => (
    <p>
        {props.part} {props.exercises}
    </p>
)

const Content = (props) => (
    <div>
        <Part part = {props.part1.name} excercise = {props.part1.exercises} />
        <Part part = {props.part2.name} excercise = {props.part2.exercises} />
        <Part part = {props.part3.name} excercise = {props.part3.exercises} />
    </div>
);

const Total = (props) => (
    <div>
        <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    </div>
)

const App = () => {
  const course = 'Half Stack application development';
  const part { 
      name:'Fundamentals of React',
      exercises:10
    };
  const part2 = {
      name: 'Using props to pass data',
      exercises: 7
  };
  const part3 = {
      name: 'State of a component',
      exercises: 14
  };
  return (
    <div>
      < Header title = {course} />
      < Content part1={part1} part2={part2} part3={part3} />
      < Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))