import React from 'react'

const App = () => {

    const Header = (props) => {
        console.log(props)

        return <h1> Kurssin nimi on {props.coursename} </h1>

    }
    const Content = () => {
        return (
            <div>
                {parts.map((parts, index) => (
                    <p key={index}>Kurssin nimi {parts.name} , jossa tehtavia {parts.exercises} </p>
                ))}
            </div>
        )
    }
    const Total = () => {
        return (
            <div>
                <p>Kurssien tehtavien summa on  {parts.reduce((total, currentValue) => total = total + currentValue.exercises, 0)} </p> 
            </div>
            )
    }
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    const sum = parts.reduce((total, currentValue) => total = total + currentValue.exercises, 0)
    console.log(sum)
    
    return (

        <div>
            <Header coursename={course} />
            <Content parts={parts} />
            <Total parts={parts} />
            
        </div>
    )
   
}

export default App