import React, { useState } from 'react'

const Statistics = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                <h1> No feedback given </h1>


            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
            
            <StaticLine text1="Good" value1={props.good1} />
            
            <StaticLine text2="Neutral" value2={props.neutral1} />
            
            <StaticLine text3="Bad" value3={props.bad1} />
            
            <StaticLine text4="All" value4={props.all1} />
            
            <StaticLine text5="Average" value5={props.average1} />
            
            <StaticLine text6="Positive" value6={props.positive1} />

            <h1> Statistics </h1>
            <p> Good {props.good1} </p>
            <p> Neutral {props.neutral1} </p>
            <p> Bad {props.bad1} </p>
            <p> All {props.all1} </p>
            <p> Average {props.average1} </p>
            <p> Positive {props.positive1} % </p>

        </div>
    )
}
const StaticLine = (props) => {

    return (
        <div>
            <p> {props.text1} {props.value1} </p>
            <p> {props.text2} {props.value2}</p>
            <p> {props.text3} { props.value3 }</p >
            <p> {props.text4} { props.value4 }</p >
            <p> {props.text5} { props.value5 }</p >
            <p> {props.text6} { props.value6 }</p >
        </div>
        
       
        )
}
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = (props) => {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [middle, setMiddle] = useState(0)
    const [allClicks, setAll] = useState([])


    const handleLeftClick = () => {
        setAll(allClicks.concat('Good'))
        setLeft(left + 1)
    }
    const handleRightClick = () => {
        setAll(allClicks.concat('Bad'))
        setRight(right + 1)
    }
    const handleMiddleClick = () => {
        setAll(allClicks.concat('Neutral'))
        setMiddle(middle + 1)
    }


    return (
        <div>
            <div>
                <h1>Give feedback</h1>

                <Button handleClick={handleLeftClick} text='Good' />

                <Button handleClick={handleMiddleClick} text='Neutral' />

                <Button handleClick={handleRightClick} text='Bad' />
                <Statistics allClicks={allClicks} good1={left} neutral1={middle} bad1={right}
                    all1={left + middle + right} average1={(left + middle + right) / 3} positive1={left / (left + right + middle) * 100} />

            </div>
        </div>
    )
}


export default App