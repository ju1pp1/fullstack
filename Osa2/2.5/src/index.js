import ReactDOM from 'react-dom';
import App from './App.js';

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

const found = courses.find(({ name }) => name === 'Node.js')
console.log(found)

var isName = (nimi) => {
    return nimi.name === 'Node.js'
}
var names = courses.filter(isName)
console.log(names)

const result = courses.map(mappi => mappi.id)
console.log(result)

var jotain = courses[0].parts
console.log(jotain)

const resultti = jotain.map(mappi => mappi.exercises)
console.log(resultti)


ReactDOM.render(
    <App courses={courses} />,
    document.getElementById('root')
)