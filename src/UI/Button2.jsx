import React from 'react'

const Button2 = ({text, onClick}) => {
  return (
    <button 
        onClick={onClick}
        className='bg-blue py-[10px] px-[52px] rounded-[8px] text-white'
    >
        {text}
    </button>
  )
}

export default Button2