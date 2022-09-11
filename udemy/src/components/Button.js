import React from 'react'

const Button = ({outline, children}) => {
  return (
    <button className={`h-[40px] px-3 text-sm font-bold border-[1px] border-buttonBg ml-[0.8rem] ${outline ? '' : 'bg-buttonBg text-white'}`}>
      {children}
    </button>
  )
}

export default Button
