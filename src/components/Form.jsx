import React from 'react'

const Form = ({setInpurSearch, inpurSearch}) => {
    
    const submitForm = e =>{
        e.preventDefault()
        setInpurSearch(e.target.search.value)
    }
    console.log(inpurSearch)
  return (
    <div>
        <form onSubmit={submitForm} >
            <input id='search' type="text" />
            <button>Search</button>
        </form>
    </div>
  )
}

export default Form