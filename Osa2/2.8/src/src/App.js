import React, { useState } from 'react'
import Note from './components/Note'

const App = () => { //props
    const [notes, setNotes] = useState([])
    const [persons, setPersons] = useState([
        { name: 'Jope Ruonansuu', number: '050 9663932' },
        { name: 'Juuso Nuoritalo', number: '050 9993932' },
        { name: 'Markku Keimonen', number: '050 9883932' },
        { name: 'Salla Saaristo', number: '050 9773932' },
    ]) //props.persons

    const [newFilter, setNewFilter] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
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
            setPersons(persons.splice(-1), alert(`${newName} is already taken.`))

        const alreadyExistss = persons.some(person => person.number === newNumber)

        if (!alreadyExistss)
            setPersons(persons.concat({ newNumber }))
        else
            setPersons(persons.splice(-1), alert(`${newNumber} is already taken.`))

        const personObject = {
            name: newName,
            number: newNumber,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: persons.length + 1

        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setPersons(persons.concat(personObject))
        setNewNumber('')
        setNewFilter('')
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
    const handleNumberChange = (event) => {
        //console.log(event.target.value)
        setNewNumber(event.target.value)

    }
    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }
    /* const handleNoteChange = (event) => {
         //console.log(event.target.value)
         setNewNote(event.target.value)
     }*/
    // Näyttääkö kaikki vai vain tärkeät

    const personsToShow = showAll
        ? persons
        : persons.filter(person => person.name.toLowerCase() === newFilter)

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

            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'filtered' : 'all'}
                    </button>
                Filter shown with: <input
                    value={newFilter}
                    onChange={handleFilterChange}
                    
                />
            </div>
            <h2>Add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name:<input
                        value={newName}
                        onChange={handlePersonChange}
                    /> </div>
                <br />
                <div>
                    Number:<input
                        value={newNumber}
                        onChange={handleNumberChange}
                    /> </div>
                <br />
                <button type="submit">add</button>
            </form>

            <h2>Numbers</h2>
            {personsToShow.map(person =>
                <Note key={person.name} person={person} />
            )}


        </div>
    )
}

export default App;