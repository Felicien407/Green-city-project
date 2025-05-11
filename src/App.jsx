import { useState } from 'react'
import './App.css'
import Home from "../src/components/pages/Home"


function App() {

  return (
    <>
      <div className='w-full h-screen bg-white overflow-x-hidden flex flex-col'> {/* This is the whole application */}
        {/* This is the navbar */}
        <Home />
        
      </div>
    </>
  )
}

export default App
