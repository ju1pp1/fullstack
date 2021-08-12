import ReactDOM from 'react-dom';
import App from './App.js';

const sisallot = [
    {
        id: 1,
        content: 'Half Stack application development',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Fundamentals of React',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 3,
        content: 'Using props to pass data',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 4,
        content: 'State of a component',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
]
const result = sisallot.map(sisalto => sisalto.content)
console.log(result)

ReactDOM.render(
    <App sisallot={sisallot} />,
    document.getElementById('root')
)
