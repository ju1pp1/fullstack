import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

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

    useEffect(() => {
        console.log('effect')
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response.data)
            })
    }, [])
    //http://localhost:3001/persons
    console.log('render', notes.length, 'notes')

    /* const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText)
        }
    }
    xhttp.open('GET', '/data.json', true)
    xhttp.send()
    */


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
        //setNewFilter(event.target.value)
        //  setNewFilter(event.target.value.toLowerCase())
          let value = event.target.value  //.toLowerCase()
          let result = []
          console.log(value)
           result = persons.filter((persons) => {
            return persons.name.search(value) != -1

        })
        console.log(result)
        //setNewFilter(result)
        setNewFilter(event.target.value) //.toLowerCase()
    }

    
      const results = !newFilter
        ? persons
        : persons.filter(persons =>

            persons.name.toLowerCase().includes(newFilter.toLocaleLowerCase())
            )
     
    /* const handleNoteChange = (event) => {
         //console.log(event.target.value)
         setNewNote(event.target.value)
     }*/
    // Näyttääkö kaikki vai vain tärkeät

    const personsToShow = showAll
        ? persons
        : persons.filter(person => person.important === true)

    
   /* const notesToShow = showAll
        ? persons
        : persons.filter(person => person.personObject.name === setNewFilter)
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

    /*
     <ul>
                    {results.map(item => (
                        <li>{item}</li>
                        ))}
                </ul>
     */
    console.log(persons)
    
    return (
        <div>
            <h2>Phonebook</h2>
            
            <div>
                Filter shown with: <input
                    value={newFilter}
                    onChange={handleFilterChange}
                />
                <ul>
                    {results.map(person => (
                        <Note key={person.name} person={person} />
                    ))}
                </ul>
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