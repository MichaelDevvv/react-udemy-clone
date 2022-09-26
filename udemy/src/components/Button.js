import React from 'react'

const Button = ({outline, children, text}) => {
  return (
    <button className={`h-[40px] ${text ? "min-w-[60px]" : null} px-3 text-sm font-bold border-[1px] border-buttonBg mr-[0.8rem] transition-all ${outline ? 'hover:bg-slate-300 hover:bg-opacity-30' : 'bg-buttonBg text-white hover:bg-black '}`}>
      {children}
    </button>
  )
}

export default Button
