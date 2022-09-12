import React, {useState} from 'react'
import { BiSearchAlt2 } from "react-icons/bi";


const SearchBar = () => {

  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <div className='w-[100%] h-[46px] rounded-full border-[1px] border-buttonBg max-w-[960px] flex items-center justify-center overflow-hidden bg-slate-50'>
      <form action="#" className='w-full h-full flex items-center justify-center'>
        <BiSearchAlt2 className={`mx-4 ${searchPhrase !== '' ? 'text-buttonBg' : 'text-gray-400'}`} size={25}/>
        <input 
          type="text" 
          name="search" 
          className='w-full h-full outline-none bg-transparent font-light text-sm text-black placeholder:text-gray-700' 
          placeholder='Szukaj dowolnych elementów'
          onChange={(e) => setSearchPhrase(e.target.value)}
          value={searchPhrase}
        />
      </form>
    </div>
  )
}

export default SearchBar
