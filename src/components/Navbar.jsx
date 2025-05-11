import React from 'react'

const Navbar = () => {
   

  return (
    <div className='w-14/15 h-20 bg-gray-200 flex items-center justify-evenly overflow-hidden fixed rounded-lg'>
      {/* This is the logo. */}
      <div className='w-1/6 bg-amber-500 h-full'>

      </div>

      {/* This is the Links */}
      <div className='w-3/8 h-full bg-fuchsia-400 relative left-1/12'>
         
      </div>

      {/* This is the icons including profile of the user, the notifications and the toggle button */}
      <div className='w-1/8 h-full bg-emerald-500 relative left-1/30'>

      </div>
    </div>
  )
}

export default Navbar