import React from 'react'
import Button from './Button'

const Person = () => {
  return (
    <div className='w-screen flex flex-col '>
      <div className="w-screen flex items-center justify-center mb-16">
        <div className="flex flex-col items-start mr-[96px]">
          <img
            className="mb-1 h-[40px]"
            src="/assets/images/logo-ub.svg"
            alt="logo_name"
          />
          <p className="w-[400px] text-base font-medium mb-3 text-buttonBg">
            Get unlimited access to 17 000+ of Udemy’s top courses for your
            team. Learn and improve skills across business, tech, design, and
            more.
          </p>
          <Button>Get Udemy Business</Button>
        </div>
        <img
          className="w-[400px]"
          src="/assets/images/woman.jpeg"
          alt="women"
        />
      </div>
      <div className="w-screen flex items-center justify-center">
        <img className='h-[400px] mr-[96px]' src="/assets/images/womanandman.jpeg" alt="womenandmen" />
        <div className='w-[400px]'>
            <h1 className='mb-1 text-4xl text-buttonBg font-serif font-medium'>Transform your life through education</h1>
            <p className='mb-3 text-buttonBg text-base  font-medium'>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
            <Button>Find out how</Button>
        </div>
      </div>
    </div>
  )
}

export default Person
