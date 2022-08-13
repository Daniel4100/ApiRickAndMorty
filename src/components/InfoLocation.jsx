import React from 'react'

const InfoLocation = ({location}) => {
  return (
    <article>
        <h2>{location?.name}</h2>
        <ul>
            <li><span>type: </span>{location?.type}</li>
            <li><span>dimension: </span>{location?.dimension}</li>
            <li><span>population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default InfoLocation