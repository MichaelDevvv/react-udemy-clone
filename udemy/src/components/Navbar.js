import React from 'react'
import Button from './Button'
import SearchBar from './SearchBar';
import Logo from '../images/logo-udemy.svg'
import { BsGlobe2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="Logo" className='w-[93px] h-[34px] pr-[8px]' />
        <div className='btn-tl'><span className='btn-tl--text'>Kategorie</span></div>
        <SearchBar />
        <div className='btn-tl'><span className='btn-tl--text'>Udemy Business</span></div>
        <div className='btn-tl'><span className='btn-tl--text'>Nauczaj na Udemy</span></div>
        <Button outline={true} className="mr-[0.8rem]">Zaloguj się</Button>
        <Button outline={false}>Zarejestruj się</Button>
        <Button outline={true}><BsGlobe2 /></Button>
    </div>
  )
}

export default Navbar
