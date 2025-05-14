import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import Profile_pic from './profile_pic'
import Notification from './Notification'
import Cart_icon from './Cart_icon'
import Logout_btn from './Logout_btn'
import Login_btn from './Login_btn'
import Logo from "../../public/no.png"
// import Login_form from './pages/Login_form'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isHome = location.pathname === "/";

  if (location.pathname === "/login") return null;

  const handleLogout = () => setIsLoggedIn(false)
    
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // }
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // }

  return (
    <div className={`w-14/15 h-20 flex items-center justify-between overflow-hidden fixed rounded-lg ${
      isLoginPage ? "bg-gray-100" : "bg-green-600 top-[.1em]"
    }`}>
      {/* This is the logo. */}
      <div className='w-1/6 h-full'>
        <img src={Logo} alt="" className='w-full h-full object-cover mt-2'/>
      </div>

      {/* This is the Links */}
      <div className='w-3/8 h-full relative left-1/12 flex items-center justify-evenly'>
        <div>
          <a href="" className='font-semibold text-xl text-white hover:text-gray-200'>Home</a>
        </div>
        <div>
          <a href="" className='font-semibold text-xl text-white hover:text-gray-200'>About</a>
        </div>
        <div>
          <a href="" className='font-semibold text-xl text-white hover:text-gray-200'>Contact</a>
        </div>
         
      </div>

      {/* This is the icons including profile of the user, the notifications and the toggle button */}
      <div className='w-2/9 h-full relative flex items-center justify-evenly overflow-hidden'>
        {!isLoggedIn ? ( 
        <>
          <div className='w-4/5 h-3/5 flex items-center justify-center'>
            <Link to="/login" className='w-full h-full flex items-center justify-center'>
              <Login_btn className='w-[3em]'>Sign Up</Login_btn>
            </Link>

          </div>
        </> 
        ):
        (
          <div className=' w-full h-full flex'>
                <div className='w-[6em] h-full flex items-center justify-center object-cover overflow-hidden'>
                    <div className='w-[3em] h-[3em]'>
                      <Profile_pic className='w-2/2 h-full object-cover'/>
                    </div>
                </div>            
                <div className='w-[6em] h-full flex items-center justify-center object-cover'>
                  <Link to="/cart" className='w-full h-full flex items-center justify-center'>
                    <Cart_icon />
                  </Link>
                </div>
                <div className='w-[6em] h-full flex items-center justify-center object-cover'>
                  <Notification />
                </div>
                <div className='w-[8em] h-full flex items-center justify-center relative right-1'>
                  <Logout_btn />
                </div>
          </div>
        )}

      </div>

    </div>
  )
}

export default Navbar