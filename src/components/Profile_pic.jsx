import React from 'react'
import Gojo from "../../public/images/Gojo.jpeg"

const Profile_pic = () => {
  return (
    <div className='w-2/2 h-2/2 rounded-full ring-white ring-1 hover:bg-gray-200/20 overflow-hidden'>
      <img src={Gojo} alt="" className='w-full h-full object-cover'/>
    </div>
  )
}

export default Profile_pic