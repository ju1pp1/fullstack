import React from 'react'

const Note = ({ person }) => {
    return (
        <ul>
            {person.name} {person.number}
            {person.content}
            
        </ul>
    )
}
const Country = ({ country }) => {
    return (
        <ul>
            {country.name}
        </ul>
        )
}

export default Note