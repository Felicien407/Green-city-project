import React from 'react'
import { useNavigate } from "react-router-dom"
import Button from '../../Button'
import { Link } from "react-router-dom"



const Card = ({ image, name, short_d}) => {

   const navigate = useNavigate();

   const seedDetail = () => {
     navigate('/seedDetails', {
      state: {
         image,
         name,
         short_d
      }
     })
   }

  return (
    <div className='w-1/5 h-[18em] bg-white rounded-xl flex flex-col items-center justify-evenly shadow-md shadow-black/20'>
      <div className='w-11/12 h-3/6'>
         <img src={image} alt={name} className='w-full h-full object-cover rounded-t-2xl rounded-b-2xl' />
      </div>

      <div className='w-full h-3/8 flex flex-col items-center justify-evenly'>
         <div className='w-9/10 h-1/3'>
            <p className='text-lg font-medium relative ml-8'>{ name }</p>
         </div>
         <div className='w-9/10 h-1/4'>
            <p className='text-gray-500/50 text-md font-md relative ml-8'>{short_d}</p>
         </div>
         <div className='w-full h-[2.5em] flex items-center justify-center'>
            <div className='w-9/11 h-12/12 bg-white shadow-sm shadow-black/10 rounded-full flex items-center justify-end'>
               <Link to="/seedDetails" className='w-full h-full flex items-center justify-center'>
                  <Button onClick={seedDetail}>Detail</Button>
               </Link>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Card