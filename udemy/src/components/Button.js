import React from 'react'

const Button = ({outline, children}) => {
  return (
    <button className={`btn ${outline ? '' : 'bg-buttonBg text-white'}`}>
      {children}
    </button>
  )
}

export default Button
