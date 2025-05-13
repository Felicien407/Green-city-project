import React from 'react'

const Login_btn = ({children}) => {
  return (
   <div className='w-5/7 h-10/11 ring-2 ring-white rounded-full flex items-center justify-center relative mr-1 shadow-md hover:bg-green-400 hover:text-white hover:ring-0 transform active:scale-95 transition duration-100'>
      <p className='text-lg font-semibold text-center text-white'>
         {children}
      </p>
   </div>
  )
}

export default Login_btn