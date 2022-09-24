import React from 'react'
import Button from './Button'
import SearchBar from './SearchBar';
import Logo from '../images/logo-udemy.svg'
import { BsGlobe2 } from "react-icons/bs";
import { GrCart } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="Logo" className='w-[93px] h-[34px] pr-[8px]' />

        <div className='btn'><span className='text-ButtonBg font-light font-xs'>Kategorie</span></div>
        <SearchBar />
        <div className='btn'><span className='text-ButtonBg font-light font-xs'>Udemy Bussiness</span></div>
        <div className='btn'><span className='text-ButtonBg font-light font-xs'>Nauczaj na Udemy</span></div>
        <GrCart size={25} className='p-0 m-0' />
        <Button outline={true} className="mr-[0.8rem]">Zaloguj się</Button>
        <Button outline={false}>Zarejestruj się</Button>
        <Button outline={true}><BsGlobe2 /></Button>
    </div>
  )
}

export default Navbar
