import React from 'react'
import Logo from "../../public/no.png"

const Footer = () => {
  return (
    <div className='w-full h-full flex items-center justify-evenly'>
      <div className='w-1/4 h-10/11'>
         <img src={Logo} alt="" className='relative -top-[6em]'/>
      </div>
      <div className='w-1/4 h-10/11 flex flex-col'>
         <div className='w-full h-[4em] flex items-center justify-center'>
            <p className='text-2xl font-semibold text-white underline'>About Us</p>
         </div>
         <div className='w-full h-[16em] flex flex-col justify-evenly'>
            <li className='text-white text-md font-medium'> .We are the SeedLink, we act as a middle man</li>
            <li className='text-white text-md font-medium'>. We help you to get your good seeds for your harvest</li>
            <li className='text-white text-md font-medium'>. We act in Rwanda where everyone in Rwanda would be able to Communicate</li>
            <li className='text-white text-md font-medium'>. Everything we do Is for you</li>
         </div>
         <div>

         </div>
      </div>
      <div className='w-1/4 h-10/11 flex flex-col'>
         <div className='w-full h-[4em] flex items-center justify-center'>
            <p className='text-2xl font-semibold text-white underline'>Contact Us</p>
         </div>
         <div className='w-full h-[16em] flex flex-col justify-evenly'>
            <p className='text-white text-md font-medium'>Phone : +250783987210</p>
            <p className='text-white text-md font-medium'>email: seedlink@gmail.com</p>
         </div>
         <div>

         </div>
      </div>
    </div>
  )
}

export default Footer