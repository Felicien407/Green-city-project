import React from 'react'
import { useLocation } from 'react-router-dom'
import Profile_pic from '../profile_pic';

const Details = () => {
   const location = useLocation();
   console.log("Location state:", location);
   const { image, name, short_d } = location.state || { image: '', name: '', short_d: '' };

   if (!name) {
      return <div className="text-center text-red-500">No seed data available.</div>;
   }

   return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
         <div className="w-10/12 h-10/12 bg-white p-8 rounded-lg shadow-lg flex items-center justify-evenly">
            <div className='w-2/5 h-4/5 rounded-xl'>
               <img src={image} alt="" className='w-full h-full object-cover rounded-xl' />
            </div>
            <div className='w-3/6 h-3/4 flex flex-col items-center justify-evenly'>
               <div className='w-full h-[3.5em] flex items-center'>
                  <p className='text-4xl font-semibold'>{name}</p>
               </div>
               <div className='w-full h-[2em] flex items-center relative -top-[1em]'>
                  <div className='w-[2em] h-[2em]'>
                     <Profile_pic />
                  </div>
                  <p className='relative left-3 font-medium italic'>Niyomwungeri Felicien</p>
               </div>
               {/* Counting button and  */}
               <div className='w-full h-[4em] flex items-center relative -top-[1em]'>
                  <div className='w-1/3 h-9/11 rounded-full flex items-center justify-center overflow-hidden ring-1 ring-gray-600'>
                     <div className='w-1/3 h-full bg-gray-400 flex items-center justify-center ring-1 ring-r-gray-400'> 
                        <p className='text-4xl font-medium'>-</p>
                      </div>
                      {/* Counting the users booking items */}
                     <div className='w-1/3'></div>
                     <div className='w-1/3 h-full bg-gray-400 flex items-center justify-center ring-1 ring-l-gray-400'>
                         <p className='text-4xl font-medium'>+</p>
                      </div>
                  </div>
               </div>
               {/* Booking and chatting buttons are here */}
               <div className='w-full h-[5em] flex items-center justify-evenly'>
                  {/* Booking One */}
                  <div className='w-5/11 h-8/11 bg-green-600 flex items-center justify-center hover:ring-2 hover:bg-green-600/90 text-2xl font-semibold text-white'>
                     Book Now
                  </div>
                  {/* Chatting One */}
                  <div className='w-5/11 h-8/11 ring-2 ring-green-600 flex items-center justify-center text-2xl font-semibold text-green-600 hover:bg-green-600 hover:ring-0 hover:text-white'>
                     Chat Now
                  </div>
               </div>
               {/* Descriptions */}
               <hr className='w-full text-gray-600 font-bold' />
               <div className='w-full h-[7em]'>
                  <p className='relative -top-[1em] text-lg text-gray-600 font-medium left-[.9em]'>Descriptions</p>
                  <p className='h-1/2 text-gray-600 leading-[1.3em] left-[.9em]'>{short_d}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Details;
