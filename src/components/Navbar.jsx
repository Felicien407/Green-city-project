import React, { useState } from 'react'
import Profile_pic from './profile_pic'
import Notification from './Notification'
import Cart_icon from './Cart_icon'
import Language_ico from './Language_ico'
import Login_btn from './Login_btn'
// import { BrowseRouter as Router, Routes, Route} from "react-router-dom"
import Login_form from './pages/Login_form'
// import { Link } from 'lucide-react'
import {Link} from "react"

const Navbar = () => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className='w-14/15 h-20 bg-green-600 flex items-center justify-between overflow-hidden fixed rounded-lg'>
      {/* This is the logo. */}
      <div className='w-1/6 bg-amber-500 h-full'>

      </div>

      {/* This is the Links */}
      <div className='w-3/8 h-full relative left-1/12 flex items-center justify-evenly'>
        <div>
          <a href="" className='font-semibold text-xl text-white hover:text-gray-200'>Home</a>
        </div>
        <div>
          <a href="" className='font-semibold text-xl text-white hover:text-gray-200'>Seeds</a>
        </div>
        <div>
          <a href="" className='font-semibold text-xl text-white hover:text-gray-200'>About</a>
        </div>
        <div>
          <a href="" className='font-semibold text-xl text-white hover:text-gray-200'>Contact</a>
        </div>
         
      </div>

      {/* This is the icons including profile of the user, the notifications and the toggle button */}
      <div className='w-1/7 h-full relative left-2/30 flex items-center justify-evenly overflow-hidden'>
        <div className='w-[6em] h-full flex items-center justify-center object-cover overflow-hidden'>
            <div className='w-[3em] h-[3em]'>
              <Profile_pic className='w-2/2 h-full object-cover'/>
            </div>
        </div>

        {!isLoggedIn ? ( 
        <>
          <div className='w-4/5 h-3/5 flex items-center justify-center'>
            <Login_btn onClick={ handleLogin }> <a href={<Login_form />}>Sign Up</a> </Login_btn>
          </div>
        </> 
        ):
        (
          <>
                <div className='w-[6em] h-full flex items-center justify-center object-cover'>
                  <Notification />
                </div>
                <div className='w-[6em] h-full flex items-center justify-center object-cover'>
                  <Cart_icon />
                </div>
          </>
        )}

      </div>

      <div className='w-[8em] h-full flex items-center justify-center'>
        <Language_ico />
      </div>
    </div>
  )
}

export default Navbar