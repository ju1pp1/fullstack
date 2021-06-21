import React from 'react'

const App = () => {
    
    const Header = (props) => {
        
        return (
            <div>
                <h1> Kurssin nimi on {props.coursename} </h1>
            </div>
            )
    }
    const Content = (props) => {
        return (
            <div>
                <p> Kurssin sisallon ensimmainen osio on {props.part1} , jossa on {props.exercises1} tehtavaa. </p>
                <p> Toinen osio on {props.part2}, jossa on {props.exercises2} tehtavaa. </p>
                <p> Viimeinen osio on {props.part3}, jossa on {props.exercises3} tehtavaa. </p>
                    </div>
            )
    }
    const Total = (props) => {
        return (
            <div>
                <p> Tehtavien yhteismaara on {props.count}. </p>
            </div>
        )
    }
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14


    return (
        <div>
            <Header coursename={course} />
            <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
            <Total count={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App
