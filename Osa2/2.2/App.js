import React from 'react'
//import Course from './components/Course'

const App = () => {

    const Course = () => {
        
        const Header = (props) => {
            return <h1>{props.otsikko} </h1>
        
        }
        const Content = (props) => {

            const Sum = () => {

                return <b> Total of {props.summa} exercises </b>
            }
            const Part1 = () => {

                return <p> {props.kurssi1} {props.harjoitus1} </p>
            }
            const Part2 = () => {

                return <p> {props.kurssi2} {props.harjoitus2} </p>
            }
            const Part3 = () => {

                return <p> {props.kurssi3} {props.harjoitus3} </p>
            }
            const Part4 = () => {

                return <p> {props.kurssi4} {props.harjoitus4} </p>
            }
            return (
                <div>
                    <Part1 />
                    <Part2 />
                    <Part3 />
                    <Part4 />
                    <Sum />
                </div>
                    )
                }
        return (
            <div>
                <p></p>
                
                <Header otsikko={course.name} />
                <Content kurssi1={course.parts[0].name} harjoitus1 = { course.parts[0].exercises }
                         kurssi2={course.parts[1].name} harjoitus2={course.parts[1].exercises}
                         kurssi3={course.parts[2].name} harjoitus3={course.parts[2].exercises}
                         kurssi4={course.parts[3].name} harjoitus4={course.parts[3].exercises}
                         summa={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises}


                />
            </div>
            )
    }
    
    const course = {

        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }
    
    return (
        <div>
            <Course course={course} />
        </div>
    )
}

export default App;