import React from 'react'

    const Note = ({ person }) => {
        return (
            <ul>
                {person.name}
                {person.content}
            </ul>
     )
    }

export default Note