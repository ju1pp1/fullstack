import React from 'react'

const App = () => {

    const Header = () => {
        console.log()

        return <h1> Kurssin nimi on {course.name} </h1>

    }
    const Content = () => {
        return (
            <div>
                <p> Eka kurssi {course.parts[0].name} ja tehtavia {course.parts[0].exercises} </p>
                <p> Toka kurssi {course.parts[1].name} ja tehtavia {course.parts[1].exercises} </p>
                <p> Kolmas kurssi {course.parts[2].name} ja tehtavia {course.parts[2].exercises} </p>

            </div>
        )
    }
    const Total = () => {
        return (
            <div>
                <p>Kurssien tehtavien summa on  {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </p>
            </div>
        )
    }
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }

    console.log(course.parts[0].name)
    return (

        <div>
            <Header coursename={course} />
            <Content course={course} />
            <Total course={course} />

        </div>
    )

}

export default App