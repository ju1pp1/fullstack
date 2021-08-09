import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = (props) => {

    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])
    const [selected, setSelected] = useState(0)

    const handleRandomClick = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }
    const handleVotes = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }
    const highestVote = () => votes.indexOf(Math.max(...votes))

    const anecdotes = [
        'Any fool can write code that a computer can understand.Good programmers write code that humans can understand.',
        'First, solve the problem.Then, write the code.',
        'Experience is the name everyone gives to their mistakes.',
        'In order to be irreplaceable, one must always be different',
        'Java is to JavaScript what car is to Carpet.',
        'Knowledge is power.',
        'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.'
    ]
   
    console.log(votes)
    return (
        <div>
            <h1>Anecdote of the day</h1>
            
            <Button handleClick={handleRandomClick} text='Random Anecdote' />
            <Button handleClick={handleVotes} text='Vote' />
            

            <p>{anecdotes[selected]}</p>
            <p> has {votes[selected]} votes.</p>
            <h1> Anecdote with most votes </h1>
            <p> {anecdotes[highestVote()]} </p>
        </div>
    )
}


export default App