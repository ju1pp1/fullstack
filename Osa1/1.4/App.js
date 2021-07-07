import React from 'react'

const App = () => {

    const Header = (props) => {
        console.log(props)

        return <h1> Kurssin nimi on {props.coursename} </h1>

    }
    const Content = () => {
        return (
            <div>
                <p> Eka kurssi {parts[0].name} ja tehtavia {parts[0].exercises} </p>
                <p> Toka kurssi {parts[1].name} ja tehtavia {parts[1].exercises} </p>
                <p> Kolmas kurssi {parts[2].name} ja tehtavia {parts[2].exercises} </p>

            </div>
        )
    }
    const Total = () => {
        return (
            <div>
                <p>Kurssien tehtavien summa on  {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p>
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

    console.log(parts[0].name, parts[1].name)
    return (

        <div>
            <Header coursename={course} />
            <Content parts={parts} />
            <Total parts={parts} />

        </div>
    )

}

export default App