import React from 'react'

const Pagination = ({arrayPages, currentPage, setCurrentPage, quantityPages}) => {

    const prevPage = () =>{
        if (currentPage - 1 === 0) {
            setCurrentPage(quantityPages)
        }else{
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () =>{
        if (currentPage + 1 > quantityPages) {
            setCurrentPage(1)
        }else{
            setCurrentPage(currentPage + 1)
        }
    }

    const changePagina = n => setCurrentPage(n)

  return (
    <div className='pagination-container'>
        <div className='arrow' onClick={prevPage} > &#60; </div>

        <ul className='pagination-list'>
        {
            arrayPages?.map(num =>(
                <li
                key={num}
                onClick={() => changePagina(num)}
                className={currentPage === num ? 'page-number page-active' : 'page-number'}
                >{num}</li>
            ))
        }
        </ul>

        <div className='arrow' onClick={nextPage}> &#62; </div>
    </div>
  )
}

export default Pagination