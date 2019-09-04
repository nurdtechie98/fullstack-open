import React from 'react'

const Header = (props) => (
    <h1>
        { props.title }
    </h1>
)

const Part = (props) => (
    <p>
        {props.part} {props.exercise}
    </p>
)

const Content = ({parts}) =>{
        return parts.map((part)=><Part key={part.name} part = {part.name} exercise = {part.exercises} />)
}

const Total = ({parts}) => {
    const total = parts.reduce((sum,part)=>sum+=part.exercises,0)
    return (<div>
        <p>Number of exercises {total}</p>
    </div>)
}
const Course = ({course}) => (
    <div>
        < Header title = {course.name} />
        < Content parts = {course.parts} />
        < Total parts = {course.parts} />
    </div>
)

export default Course