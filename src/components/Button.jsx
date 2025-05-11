import React from 'react'

const Button = ({children}) => {

  return (
    <div className='w-3/7 h-10/11 bg-green-500 rounded-full flex items-center justify-center relative mr-1 shadow-md '>
      <p className='text-lg font-semibold text-center text-white'>
         {children}
      </p>
    </div>
  )
}

export default Button