import React from 'react'

const Testimonial = () => {
  return (
    <div className='w-[35em] h-[19em] bg-gray-300 rounded-lg shadow-lg shadow-black/40 flex flex-col items-center justify-center overflow-hidden'>
      <div className='w-2/12 h-2/10 bg-gray-500 relative -left-3/7'></div>

      <div className='w-full h-6/10 bg-indigo-600'></div>

      <div className='w-full h-3/12 bg-fuchsia-700 flex justify-between'>
         <div className='w-7/12 h-8/10 bg-gray-950 relative ml-5'>

         </div>

         <div className='w-2/12 h-9/10 bg-gray-500 relative top-3'></div>
      </div>
    </div>
  )
}

export default Testimonial