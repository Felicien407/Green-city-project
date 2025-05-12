import React from 'react'
import Planting_rice from "../../public/images/potato_planting.jfif"
import Button from './Button'

const Hero = () => {
  return (
    <div className='w-370 h-[40em] bg-gray-100 rounded-xl flex items-center justify-evenly'>
      <div className='w-1/3 h-2/3 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold relative -top-2 text-center text-gray-700'>
          Find the Perfect <p className='text-4xl font-bold relative -top-2 text-center text-green-600'>Seeds for Your Garden</p>
        </h1>

        <p className='text-md relative top-2 text-center'>
          Find the suppliers and the better seeds here and make your own harvest.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla quod, laudantium assumenda sunt consectetur
        </p>

        <div className='w-10/12 h-[3.5em] relative top-10 items-center justify-center'>
          <Button> Explore </Button>
        </div>

      </div>

      <div className='w-3/6 h-4/5 bg-gray-500 overflow-hidden rounded-3xl'>
        <img src={Planting_rice} alt="" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Hero