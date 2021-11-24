import React from 'react'

const Country = ({ country }) => {
    //{country.capital}<p> </p> 
    return (
        <ul>
            {country.name}
        </ul>
    )
}

export default Country
