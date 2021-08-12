import React from 'react'
import Content from './components/Content'

const App = ({ sisallot }) => {
    const course = {

        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id:1
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
            }
        ]
    }

    return (
        <div>
            <ul>
                
                {sisallot.slice(1).map(sisalto =>
                    <Content key={sisalto.id} sisalto={sisalto} />
                 )}
            </ul>
        </div>
    )
}

export default App;
