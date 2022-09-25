import React from 'react'

const Button = ({outline, children, text}) => {
  return (
    <button className={`h-[40px] ${text ? "min-w-[60px]" : null} px-3 text-sm font-bold border-[1px] border-buttonBg mr-[0.8rem] ${outline ? '' : 'bg-buttonBg text-white'}`}>
      {children}
    </button>
  )
}

export default Button
