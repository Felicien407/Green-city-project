import React from 'react'
import Google from "../../../public/icons/google.png"
import Apple from "../../../public/icons/apple.png"

const Login_form = () => {
  return (
    <div className='w-3/11 h-8/11 bg-gray-200 rounded-xl ring-2 ring-green-800 flex flex-col items-center justify-evenly'>
      <div className='w-full h-[3em]  flex items-center justify-center'>
        <h1 className='text-2xl text-green-600 font-bold'>Sign Up</h1>
      </div>
      <div className='w-full h-1/2 flex flex-col items-center justify-evenly'>
        <input type="text" placeholder='Full Names' className='ring-2 ring-gray-500 w-10/12 h-1/6 rounded-lg outline-none pl-6 text-lg focus:ring-2 focus:ring-green-600 transition duration-150 text-gray-800' />
        <input type="text" placeholder='Email' className='ring-2 ring-gray-500 w-10/12 h-1/6 rounded-lg outline-none pl-6 text-lg focus:ring-2 focus:ring-green-600 transition duration-150 text-gray-800' />
        <input type="text" placeholder='Phone_number' className='ring-2 ring-gray-500 w-10/12 h-1/6 rounded-lg outline-none pl-6 text-lg focus:ring-2 focus:ring-green-600 transition duration-150 text-gray-800' />
        <input type="text" placeholder='Password' className='ring-2 ring-gray-500 w-10/12 h-1/6 rounded-lg outline-none pl-6 text-lg focus:ring-2 focus:ring-green-600 transition duration-150 text-gray-800' />
        <input type="text" placeholder='Confirm Password' className='ring-2 ring-gray-500 w-10/12 h-1/6 rounded-lg outline-none pl-6 text-lg focus:ring-2 focus:ring-green-600 transition duration-150 text-gray-800' />
      </div>
      <div className='w-full h-[1em] flex items-center relative -top-[.5em]'>
        <a href="" className='text-md font-medium relative left-[2.5em] text-pink-900 underline'>Having trouble signing Up?</a>
      </div>
      <div className='w-full h-[3.5em] flex items-center justify-center'>
        <button className='w-10/12 h-10/12 text-lg font-medium bg-green-600 rounded-lg hover:bg-green-700 active:transform active:scale-97 transition duration-75'>Sign Up</button>
      </div>
      <div className='w-full h-2/9  flex flex-col items-center justify-evenly'>
        <div className='w-9/11 h-3/9 ring-1 rounded-lg flex items-center justify-evenly'>
          <div className=' w-1/7 h-full flex items-center justify-center'>
            <img src={Google} alt="" className='w-[2.5em] h-[2.5em]'/>
          </div>
          <div className='w-3/5 h-full flex items-center'>
            <p className='text-md'>Sign In with Google</p>
          </div>
        </div>

        <div className='w-9/11 h-3/9 ring-1 rounded-lg flex items-center justify-evenly'>
          <div className=' w-1/7 h-full'>
            <img src={Apple} alt="" className='w-[2.5em] h-[2.5em]'/>
          </div>
          <div className='w-3/5 h-full flex items-center'>
            <p className='text-md'>Sign In with Apple</p>
          </div>
        </div>
      </div>
      <div className='w-full h-[2em] flex items-center justify-center'>
          <p className=''>Already have an account? <a href="" className='text-pink-900 font-medium underline'>Sign In</a></p>
      </div>
    </div>
  )
}

export default Login_form