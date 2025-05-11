import Hero from "../Hero"
import Card from "./items/card"
import SeedList from "./items/SeedList"
import Navbar from "../Navbar"
import Testimonial from "./items/Testimonial"

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      {/* Navbar */}
      <div className='w-full h-20 relative top-3 flex justify-center items-center z-50 overflow-hidden'>
        <Navbar />
      </div>

      {/* Hero */}
      <div className='w-full flex flex-col items-center justify-center mt-6'>
        <Hero />
      </div>

      {/* Trusted By Section */}
      <div className="w-full h-66 bg-indigo-600 mt-10 flex flex-col items-center justify-between">
        <h1 className="text-lg">Trusted by</h1>
        <div className="w-10/12 h-7/12 bg-gray-700"></div>
      </div>

      {/* About Section Placeholder */}
      <div className="w-8/12 h-[456px] flex items-center justify-evenly bg-green-500 mt-20">
        <div className="w-2/5 h-full bg-gray-900">

        </div>
        <div className="w-2/5 h-full bg-gray-900">

        </div>
      </div>

      {/* How it works */}
      <div className="w-full h-[30em] bg-gray-500 relative mt-30 flex flex-col items-center justify-evenly">
        <p className="text-4xl font-bold">This is how it works</p>

        <div className="w-9/12 h-[20em] bg-fuchsia-600 flex items-center justify-evenly">
          <div className="w-[14em] h-[18em] bg-emerald-600 flex items-center justify-center">
            <div className="w-[10em] h-[10em] bg-gray-700 rounded-full">

            </div>
            <div>
              <p>Choose a Seed</p>
            </div>

          </div>
          <div className="w-[14em] h-[18em] bg-emerald-600 flex flex-col items-center justify-center">
            <div className="w-[10em] h-[10em] bg-gray-700 rounded-full">

            </div>
            <div>
              <p>Choose Talk with the suppliers</p>
            </div>
          </div>
          <div className="w-[14em] h-[18em] bg-emerald-600 flex flex-col items-center justify-center">
            <div className="w-[10em] h-[10em] bg-gray-700 rounded-full">

            </div>
            <div>
              <p>Choose a Seed</p>
            </div>
          </div>
          <div className="w-[14em] h-[18em] bg-emerald-600 flex flex-col items-center justify-center">
            <div className="w-[10em] h-[10em] bg-gray-700 rounded-full">

            </div>
            <div>
              <p>Choose a Seed</p>
            </div>
          </div>

        </div>
      </div>

      <div className="relative w-10/12 h-auto mt-20">
        <div className="w-full h-[6em]"></div>
        <SeedList />
      </div>

      {/* Testimonials all our users who have already used the website. */}
      <div className="w-full h-[27em] bg-gray-800 relative top-40">
        <Testimonial />
      </div>

      <div className="w-full h-[30em] bg-green-600 relative top-50">

      </div>

    </div>
  )
}

export default Home