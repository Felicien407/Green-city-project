import React from 'react'
import Cart_item from './items/Cart_item'

const Cart = () => {
  
  return (
    <div className='w-full h-full'>
     <div className='w-full h-full flex flex-col items-center justify-evenly'>
      <div className='w-10/12 h-[3em] relative top-[1em] flex flex-col justify-between'>
        <h1 className='font-black text-4xl text-green-600 '>Your Cart</h1>
        <hr className='border-t-2 border-green-600'/>
      </div>

      {/* The items division */}

      <div className='w-11/12 h-10/12 flex justify-evenly'>
        <Cart_item />
      </div>
     </div>
    </div>
  )
}

export default Cart