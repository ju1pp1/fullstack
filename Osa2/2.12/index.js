import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)
const promise2 = axios.get('https://restcountries.com/v3.1/all')
promise2.then(response => {
    console.log(promise2)
})
const persons = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true,
        name: [],
        number: []
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false,
        name: [],
        number: []
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true,
        name: [],
        number: []
    }
]
const country = [
    {
        name: []
    }
    
]
const resultsC = country.map(country => country.name)
console.log(resultsC)
const result = persons.map(person => person.content)
console.log(result)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)