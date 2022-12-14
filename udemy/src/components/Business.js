import React from 'react'
import Button from './Button'
import Person from './Person'

const Business = () => {
  return (
    <div className="w-screen flex flex-col my-[7rem]">
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
          className="w-[400px] h-[400px]"
          src="/assets/images/woman.jpeg"
          alt="women"
        />
      </div>
      
      <Person
        image="womanandman.jpeg"
        title="Transform your life through education"
        subtitle="Learners around the world are launching new careers, advancing in
          their fields, and enriching their lives."
        buttonText="Find out how"
      />
    </div>
  )
}

export default Business
