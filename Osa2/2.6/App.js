import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
    const [persons, setPersons] = useState(props.persons)
    const [newName, setNewName] = useState('')
    const [showAll, setShowAll] = useState(true)

    //Lisätään komponenttiin lomake uuden muistiinpanon lisäämistä varten
    //addPerson tapahtumankäsittelijä reagoi napin painallukseen

    const addPerson = (event) => {
        event.preventDefault()

        const personObject = {
            content: newName,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: persons.length + 1,
        }
        setPersons(persons.concat(personObject))
        setNewName('')
    }
    // Tapahtumakäsittelijä, kutsutaan kun syötekomponentissa tapahtuu jotain

    const handlePersonChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)

    }
    // Näyttääkö kaikki vai vain tärkeät

    const personsToShow = showAll
        ? persons
        : persons.filter(person => person.important === true)

    /* 
     <ul>
                {persons.map(person =>
                    <Note key={person.id} person={person} />
                )}
            </ul>
            <form onSubmit={addPerson}>
                 <input
                    value={newName}
                    onChange={handlePersonChange}
                />
                    <button type="submit">add</button>

                    </form>
     */
    return (        
        <div>
            <h2>Phonebook</h2>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            <ul>
                {personsToShow.map(person =>
                    <Note key={person.id} person={person} />
                )}
                </ul>
                <form onSubmit={addPerson}>
                    <input
                        value={newName}
                        onChange={handlePersonChange}
                    />
                    <button type="submit">add</button>

                </form>
            </div>
            
            <h2>Numbers</h2>
                
            </div>
    )
}

export default App;