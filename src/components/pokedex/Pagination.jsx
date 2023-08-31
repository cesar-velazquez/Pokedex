import React from 'react'

const FIRST_PAGE = 1
const Pagination = ({ lastPage, pagesInCurrentBlock, setCurrentPage, currentPage }) => {

  const handleNextPage = () => {
    setCurrentPage((prevState) => {

      const nextPage = prevState + 1

      if (nextPage <= lastPage) return nextPage
      return prevState

    })
  }

  const handleLastPage = () => setCurrentPage(lastPage)

  const handlePreviusPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1
      if (newPage >= FIRST_PAGE) return newPage
      return prevPage
    })
  }

  const handleFirstPage = () => {
    setCurrentPage(FIRST_PAGE)
  }

  return (
    <ul className=' cursor-pointer flex justify-center p-4 mx-4 items-center sm:gap-4'>

      {currentPage >= 2 && <li className=' mx-[1px]' onClick={handleFirstPage}>{"<<"}</li>}
      {currentPage >= 2 && <li className=' rounded-full p-1 font-bold' onClick={handlePreviusPage} >{"<"}</li>}

      {
        pagesInCurrentBlock.map((page) => <li className={`p-4 ${currentPage === page ? "text-white bg-red-500" : ""} `} key={page} onClick={() => setCurrentPage(page)}>{page}</li>)
      }
      {currentPage !== lastPage && <li className=' rounded-full p-1 font-bold' onClick={handleNextPage}>{">"}</li>}
      {currentPage !== lastPage && <li className=' mx-[1px]' onClick={handleLastPage}>{">>"}</li>}
    </ul>
  )
}

export default Pagination