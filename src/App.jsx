import { useState } from 'react'
import './App.css'
import Home from "../src/components/pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './components/pages/Home'
import LoginForm from './components/pages/Login_form'
import Navbar from './components/Navbar'
import Details from './components/pages/Details'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const LoginFormWrapper = () => {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      </div>
    );
  };
  

  return (
    <>
      <div className='w-full h-screen bg-gray-100 overflow-x-hidden flex flex-col'> {/* This is the whole application */}
        {/* This is the navbar */}
        <Router>
          <div className='w-full h-20 relative top-[2.6em] flex justify-center items-center z-50 overflow-hidden'>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </div>
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/login" element={<LoginFormWrapper />} />
            <Route path="/seedDetails" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App




//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { useState } from 'react'
//import Home from "./components/pages/Home"
//import LoginForm from './components/pages/Login_form'
//import Navbar from './components/Navbar'
//
//function App() {
//  const [isLoggedIn, setIsLoggedIn] = useState(false)
//
//  const LoginFormWrapper = () => {
//    return <LoginForm onLogin={() => setIsLoggedIn(true)} />
//  }
//
//  return (
//    <Router>
//      <div className='w-full h-screen bg-white overflow-x-hidden flex flex-col'>
//        {/* Navbar is shown on all pages */}
//        <div className='w-full h-20 z-50'>
//          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//        </div>
//
//        {/* Page Content */}
//        <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/login" element={<LoginFormWrapper />} />
//        </Routes>
//      </div>
//    </Router>
//  )
//}
//
//export default App

