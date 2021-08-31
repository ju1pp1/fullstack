import React, { useState } from 'react'
import Note from './components/Note'

const App = () => { //props
    const [notes, setNotes] = useState([])
    const [persons, setPersons] = useState([
        { name: 'Jope Ruonansuu'}
    ]) //props.persons

    const [newName, setNewName] = useState('')
    const [showAll, setShowAll] = useState(true)
    //const [newNote, setNewNote] = useState('')
    //Lisätään komponenttiin lomake uuden muistiinpanon lisäämistä varten
    //addPerson tapahtumankäsittelijä reagoi napin painallukseen

    const addPerson = (event) => {
        event.preventDefault()

        const alreadyExists = persons.some(person => person.name === newName)

        if (!alreadyExists)
            setPersons(persons.concat({ newName }))
        else
            alert(`${newName} is already taken.`)

        const personObject = {
            name: newName,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: persons.length + 1,
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        
        
    }
    
    /*
    const addNote = (event) => {
        event.preventDefault()

        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: persons.length + 1,
            name: newName
        }
        setPersons(persons.concat(noteObject))
        setNewNote('')
    } 
    */
    // Tapahtumakäsittelijä, kutsutaan kun syötekomponentissa tapahtuu jotain

    const handlePersonChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
        
    }
   /* const handleNoteChange = (event) => {
        //console.log(event.target.value)
        setNewNote(event.target.value)

    }*/
    // Näyttääkö kaikki vai vain tärkeät

    const personsToShow = showAll
        ? persons
        : persons.filter(person => person.important === true)
        /*
    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)
        */
    /* tärkeä / kaikki - nappi
     <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>

                {personsToShow.map(person =>
                    <Note key={person.id} person={person} />
                )}


            </div>

     * /
    /* syötekenttä
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
    
    //var message = `${newName} is already added to phonebook`
    //window.alert(message)

    console.log(persons)
    return (        
        <div>
            <h2>Phonebook</h2>
            
            <form onSubmit={addPerson}>
                Name:<input
                    value={newName}
                    onChange={handlePersonChange}
                />
                <br />
                <button type="submit">add</button>
            </form>
            {personsToShow.map(person =>
                <Note key={person.name} person={person} />
            )}
            <h2>Numbers</h2>
            
            
        </div>
    )
}

export default App;