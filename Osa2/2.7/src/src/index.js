import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
        name: []
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false,
        name: []
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true,
        name: []
    }
]

const result = persons.map(person => person.content)
console.log(result)

ReactDOM.render(
    <App persons={persons} />,
    document.getElementById('root')
)