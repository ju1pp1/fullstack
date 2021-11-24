import React from 'react'

const Country2 = ({ country2 }) => {
    //{country.capital}<p> </p> 
    return (
        <ul>
            <b>{country2.name}</b>
            <br></br>
            capital {country2.capital} <br></br>
            population {country2.population} <br></br>
            

            <b>languages</b>
            <br></br>
            <li>
                {country2.languages.map(item =>
                    item.name
                )}
            </li>
            
        </ul>
    )
}

export default Country2
