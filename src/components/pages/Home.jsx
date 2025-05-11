import Hero from "../Hero"
import Navbar from "../Navbar"


function Home() {

  return (
    <>
    {/* This is the whole application */}
      {/* <div className='w-full min-h-screen bg-white flex flex-col overflow-y-scroll overflow-x-hidden'> */}
        {/* This is the navbar */}
        <div className='w-full h-20 relative top-3 flex justify-center items-center z-50 overflow-hidden'>
          <Navbar />
        </div>
        {/* This is the Content which will scroll with a parent */}
        <div className='w-full h-14/12 flex flex-col items-center justify-center relative top-6'>
         <Hero />
        </div>

        {/* This is who are trusting us (companies) */}
         <div className="w-full h-66 bg-indigo-600 relative top-10 flex flex-col items-center justify-between">
            <h1 className="text-lg">Trusted by</h1>
            {/* All the companies which trust us will be over here. */}
            <div className="w-10/12 h-7/12 bg-gray-700">

            </div>
         </div>

         {/* About us. This is just what we do. */}
      {/* </div> */}
    </>
  )
}

export default Home
