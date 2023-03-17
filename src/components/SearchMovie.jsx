import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdSort } from 'react-icons/md'

const SearchMovie = () => {
  return (
    <div className='search'>
      <h2>All Movies</h2>
      <div className="search__bar">
        <AiOutlineSearch fontSize={20} color='#696868' style={{ zIndex: 1 }} />
        <input type="text" placeholder='Search' />
      </div>
      <button className='search__sort'><MdSort fontSize={24}/> Sort</button>
    </div>
  )
}

export default SearchMovie