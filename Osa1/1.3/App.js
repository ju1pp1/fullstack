import React from 'react'

const App = () => {

    const Header = (props) => {
        console.log(props)
           
             return   <h1> Kurssin nimi on {props.coursename} </h1>
            
    }
    const Content = (props) => {
        return (
            <div>
            <p> osa1 on nimeltaan {props.part1} </p>
            <p> osa2 on nimeltaan {props.part2} </p>
            <p> osa3 on nimeltaan {props.part3} </p>
        </div>)
    }
    const Total = (props) => {
        return (
            <div>
                <p> Tehtavien yhteismaara on {props.count}. </p>
            </div>
        )
    }
    const course = 'Half Stack application development'
    const part1 = 
    {
        name: 'Fundamentals of React',
        exercises: 10
    }
const part2 = 
    {
        name: 'Using props to pass data',
        exercises: 7
    }
const part3 =
    {
        name: 'State of a component',
        exercises: 14
        }
    
    return (
        
        <div>
            <Header coursename={course} />
            <Content part1={(part1['name']) + " ja tehtavia " + (part1['exercises'])}
                part2={(part2['name']) + " ja tehtavia " + (part2['exercises'])}
                part3={(part3['name']) + " ja tehtavia " + (part3['exercises'])} />
            <Total count={(part1['exercises']) + (part2['exercises']) + (part3['exercises'])} />
        </div>
    )
    console.log(part1['exercises'])
}

export default App
