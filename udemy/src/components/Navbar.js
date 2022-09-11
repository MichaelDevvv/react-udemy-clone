import React from 'react'
import Button from './Button'
import SearchBar from './SearchBar';
import Logo from '../images/logo-udemy.svg'
import { BsGlobe2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='navbar w-screen bg-white h-[72px] px-6 shadow-md flex items-center'>
        <img src={Logo} alt="Logo" className='w-[93px] h-[34px] pr-[8px]' />
        <div className='h-[100%] flex items-center justify-center mx-[12px]'><span className='text-ButtonBg font-light font-xs'>Kategorie</span></div>
        <SearchBar />
        <Button outline={true} className="mr-[0.8rem]">Zaloguj się</Button>
        <Button outline={false}>Zarejestruj się</Button>
        <Button outline={true}><BsGlobe2 /></Button>
    </div>
  )
}

export default Navbar
