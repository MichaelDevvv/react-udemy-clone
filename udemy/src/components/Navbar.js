import React from 'react'
import Button from './Button'
import SearchBar from './SearchBar'
import { BsGlobe2 } from 'react-icons/bs'
import { GrCart } from 'react-icons/gr'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/assets/images/logo-udemy.svg" alt="Logo" className="w-[93px] h-[34px] pr-[8px]" />

      <div className="btn">
        <span className="text-ButtonBg font-light font-xs">Categories</span>
      </div>
      <SearchBar />
      <div className="btn">
        <span className="text-ButtonBg font-light font-xs">
          Udemy Bussiness
        </span>
      </div>
      <div className="btn">
        <span className="text-ButtonBg font-light font-xs">Teach on Udemy</span>
      </div>
      <GrCart size={25} className="p-0 m-0" />
      <Button outline={true} text={true} className="mr-[0.8rem]">
        Log in
      </Button>
      <Button outline={false} text={true}>
        Sign up
      </Button>
      <Button outline={true} text={false}>
        <BsGlobe2 />
      </Button>
    </div>
  )
}

export default Navbar
