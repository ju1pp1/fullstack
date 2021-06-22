import React from 'react'

const App = () => {

    const Header = (props) => {

        return (
            <div>
                <h1> Kurssin nimi on {props.coursename} </h1>
            </div>
        )
    }
    const Part = (props) => {
        return (
            < div >
                <p> Nimi on {props.osa1}{props.osa2}{props.osa3} ja tehtavia {props.teht1}{props.teht2}{props.teht3}</p>
            </div >
                )
    }
    const Content = () => {
            return (
                <div>
                    <Part osa1={part1} teht1={exercises1} />
                    <Part osa2={part2} teht2={exercises2}/>
                    <Part osa3={part3} teht3={exercises3}/>
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
            <Content />
            <Total count={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App
