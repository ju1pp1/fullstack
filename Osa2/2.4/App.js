import React from 'react'
//import Course from './components/Course'

const App = () => {

    const Course = () => {

        const Header = () => {
            return <h1>{courses[0].name} </h1>

        }
        const Content = (props) => {
            
            const Sum = () => {

                var harjoitukset1 = courses[0].parts
                console.log(harjoitukset1)
                
                var summa1 = harjoitukset1.reduce((sum, order) => sum + order.exercises, 0)
                console.log(summa1)

               // var totalAmount = total.reduce(function (sum, order) {
                //    console.log("hello", sum, order)
                 //   return sum + order.exercises
               // }, 0)
               // console.log(totalAmount)
                //{props.summa}
               // return <b> Total of {totalAmount} exercises  </b>
                return <b> Total of {summa1} exercises </b>
            }
            const Part1 = () => {

                var namesi = courses[0].parts
                console.log(namesi)

                var names = namesi.map((namess) => namess.name) 
                    console.log(names)

                //var part1 = namesi.map((nimett) => nimett.name)
                //console.log(part1)
                //var partyks = namesi.map((nimett) => nimett.exercises)
                //console.log(partyks)

                return <p> {courses[0].parts[0].name} {courses[0].parts[0].exercises} </p>

            }
            const Part2 = () => {

                return <p> {courses[0].parts[1].name} {courses[0].parts[1].exercises} </p>
            }
            const Part3 = () => {

                return <p> {courses[0].parts[2].name} {courses[0].parts[2].exercises} </p>
            }
            const Part4 = () => {

                return <p> {courses[0].parts[3].name} {courses[0].parts[3].exercises} </p>
            }
            const Nodejs = () => {
                return <h1>{courses[1].name}</h1>

            }
            const Parts1 = () => {
                return <p> {courses[1].parts[0].name} {courses[1].parts[0].exercises} </p>

            }
            const Parts2 = () => {
                return <p> {courses[1].parts[1].name} {courses[1].parts[0].exercises} </p>

            }
            const Sum2 = () => {

                var harjoitukset2 = courses[1].parts
                console.log(harjoitukset2)

                var summa2 = harjoitukset2.reduce((sum, order) => sum + order.exercises, 0)
                console.log(summa2)

                // var totalAmount = total.reduce(function (sum, order) {
                //    console.log("hello", sum, order)
                //   return sum + order.exercises
                // }, 0)
                // console.log(totalAmount)
                //{props.summa}
                // return <b> Total of {totalAmount} exercises  </b>
                return <b> Total of {summa2} exercises </b>
                
            }
            return (
                <div>
                    <Part1 />
                    <Part2 />
                    <Part3 />
                    <Part4 />
                    <Sum />
                    <Nodejs />
                    <Parts1 />
                    <Parts2 />
                    <Sum2 />
                </div>
            )
        }
        return (
            <div>
                <p></p>

                <Header otsikko={courses} />
                <Content kurssi1={courses.name} harjoitus1={courses.name}
                    kurssi2={courses.name} harjoitus2={courses.name}
                    kurssi3={courses.name} harjoitus3={courses.name}
                    kurssi4={courses.name} harjoitus4={courses.name}
                    //summa={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises}
                    

                />
            </div>
        )
    }

    const courses = [
        {
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
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                },
                ]
            } 
        ]
    
    
    

    return (
        <div>
            <Course course={courses} />
        </div>
    )
}

export default App;