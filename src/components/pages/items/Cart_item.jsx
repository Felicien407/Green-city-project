import React from 'react'
import Seeds from"../../../../data/Seeds.json"
import Button from '../../Button'
import { useNavigate } from 'react-router-dom';


const Cart_item = ({ image, name, short_d}) => {

   const navigate = useNavigate();

  return (
    <div className='w-10/12 h-[11em] bg-gray-100 mt-[1em] flex items-center justify-evenly rounded-lg'>
      <div className='w-2/6 h-full flex items-center justify-center'>
         <div className='w-3/5 h-full flex items-center justify-center'>
            <img src={'images/rice_seed.jfif'} alt="" className='w-10/11 h-10/11 object-cover' />
         </div>
         <div className='w-2/5 h-full flex flex-col items-center justify-evenly'>
            <div className='w-full h-1/3'><p className='text-xl font-semibold flex items-center justify-center'>Rice</p></div>
            <div className='w-9/12 h-1/4'>
            <Button onClick={() => navigate(`/seedDetails`)}>Details</Button>
            </div>
         </div>
      </div>
      <div className='w-3/6 h-full flex items-center justify-evenly'>
         <div className='w-1/4 h-full flex items-center justify-center'><p className='text-2xl font-semibold'>$ 140</p></div>
         <div className='w-1/11 h-3/11 relative left-[5em] text-4xl flex items-center justify-center'>x</div>
      </div>
    </div>
  )
}

export default Cart_item