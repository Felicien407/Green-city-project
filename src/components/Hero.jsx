import React from 'react'

const Hero = () => {
  return (
    <div className='w-370 h-[40em] bg-gray-100 rounded-xl flex items-center justify-evenly'>
      <div className='w-1/3 h-2/3 bg-gray-500 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold relative -top-2 text-center text-gray-700'>
          Find the Perfect Seeds for Your Garden
        </h1>

        <p className='text-md relative top-2 text-center'>
          Find the suppliers and the better seeds here and make your own harvest.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla quod, laudantium assumenda sunt consectetur
        </p>
      </div>

      <div className='w-3/5 h-4/5 bg-gray-500'>

      </div>
    </div>
  )
}

export default Hero