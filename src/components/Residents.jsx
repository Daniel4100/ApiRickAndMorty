import React from 'react'
import useApiCall from '../hooks/useApiCall'

const Residents = ({url}) => {

    const resident = useApiCall(url)
  return (
    <article>
        <img src={resident?.image} alt={resident?.name} />
        <h3>{resident?.name}</h3>
    </article>
  )
}

export default Residents