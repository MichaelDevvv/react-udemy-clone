import React from 'react'

const SearchBar = () => {
  return (
    <div className='grow h-[46px] rounded-full border-[1px] border-buttonBg max-w-screen-md flex items-center justify-start'>
      <input type='text' placeholder="Szukaj dowolnych elementów" className="w-full outline-0"></input>
    </div>
  )
}

export default SearchBar
