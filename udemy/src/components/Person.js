import React from 'react'
import Button from './Button'

const Person = ({ image, title, subtitle, buttonText, bold }) => {
  return (
    <div className="w-screen flex items-center justify-center">
      <img
        className="h-[400px] w-[400px] mr-[96px]"
        src={`/assets/images/${image}`}
        alt="womenandmen"
      />
      <div className="w-[400px]">
        <h1 className={`mb-1 text-3xl text-buttonBg font-serif ${bold ? 'font-semibold' : ''}`}>
          {title}
        </h1>
        <p className="mb-3 text-buttonBg text-base  font-medium">
          {subtitle}
        </p>
        <Button>{buttonText}</Button>
      </div>
    </div>
  )
}

export default Person
