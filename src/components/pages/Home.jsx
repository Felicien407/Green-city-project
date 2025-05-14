import React, { useState } from 'react'
import Hero from "../Hero"
import Card from "./items/card"
import SeedList from "./items/SeedList"
import Navbar from "../Navbar"
import Testimonial from "./items/Testimonial"
import Login_form from "./Login_form"
import Footer from '../Footer'

const Home = ({ isLoggedIn, setIsLoggedIn }) => {


  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='w-full flex flex-col items-center'>

      {/* <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
      <Login_form />
      </div> */}

      {/* <div className='w-full h-20 relative top-3 flex justify-center items-center z-50 overflow-hidden'>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div> */}


      <div className='w-full flex flex-col items-center justify-center mt-[7rem]'>
        <Hero />
      </div>


      {/* <div className="w-full h-66 mt-10 flex flex-col items-center justify-between">
        <h1 className="text-lg">Trusted by</h1>
        <div className="w-10/12 h-7/12 bg-gray-100 rounded-2xl"></div>
      </div> */}

    

      <div className="relative w-10/12 h-auto mt-20 flex flex-col items-center justify-evenly">
        <div className="w-10/12 h-[6em] ">
          <p className="text-lg text-green-600 font-medium">SEEDS</p>
          <div className="w-full">
            <p className="text-3xl font-bold relative -top-3">Hot <br/>Selling Products</p>
          </div>
        </div>
        <SeedList />
      </div>

      <div className="w-full h-[27em] bg-gray-200 relative top-40 flex items-center">
        <div className="w-2/8 h-full m-20 flex items-center justify-center rounded-r-full bg-gradient-to-l from-green-600 to-transparent">
          <h1 className="text-3xl font-bold">Our Happy Customers <br /> What they Found in us</h1>
        </div>
        <Testimonial />
      </div>

      <div className="w-full h-[30em] bg-green-600 relative top-50">
        <Footer />
      </div>

    </div>
  )
}

export default Home