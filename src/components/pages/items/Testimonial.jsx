import React from 'react'
import { Quote } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa"
import Profile_pic from '../../profile_pic';

const Testimonial = () => {
  return (
    <div className='w-[35em] h-[19em] bg-gray-100 rounded-lg shadow-lg shadow-black/40 flex flex-col items-center justify-center overflow-hidden'>
      <div className='w-2/12 h-2/10  relative -left-3/7 flex items-center justify-center '>
         {/* <Quote className='w-full h-full text-gray-400 object-cover' /> */}
         <FaQuoteLeft className='w-full h-full text-gray-400 object-cover' />
      </div>

      <div className='w-full h-6/10 flex flex-col items-center justify-evenly'>
         <div className='w-full h-2/12 flex items-center'>
            <p className='text-lg font-semibold relative ml-25'>Title over here</p>
         </div>
         <div className='w-full h-9/12 flex items-center justify-center'>
            <p className='font-light w-10/12 relative'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur ratione, ex fugit, accusantium nam, quasi corrupti accusamus esse magni explicabo voluptates itaque atque minus? Velit suscipit magni animi repellendus.
            </p>
         </div>
      </div>

      <div className='w-full h-3/12 flex justify-between'>
         <div className='w-7/12 h-8/10 relative ml-5 flex items-center justify-between '>
            <div className='w-[3.7em] h-full'>
               <Profile_pic className='w-2/2 h-full object-cover'/>
            </div>

            <div className='w-5/6 h-full flex flex-col items-center justify-evenly'>
               <div className='w-full h-3/7 '>
                  <p className='text-gray-900 font-semibold italic text-center'>Niyomwungeri Felicien</p>
               </div>
               <div className='w-full h-3/7'>
                  <p className='text-gray-600 font-sans italic text-center'>The Greatest Farmer in the Kigali</p>
               </div>
            </div>
         </div>

         <div className='w-2/12 h-9/10 relative top-3 flex items-center justify-center '>
            <FaQuoteRight className='w-full h-full text-gray-400 object-cover' />
         </div>
      </div>
    </div>
  )
}

export default Testimonial