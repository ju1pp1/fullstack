import React from 'react'

const Note = ({ person }) => {
    return (
        <ul>
            {person.name} {person.number}
            {person.content}
            
        </ul>
    )
}
export default Note