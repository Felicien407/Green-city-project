import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {
   const location = useLocation();
   console.log("Location state:", location);
   const { image, name, short_d } = location.state || {};

   if (!name) {
      return <div className="text-center text-red-500">No seed data available.</div>;
   }

   return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-2/3 bg-white p-8 rounded-lg shadow-lg">
        <img src={image} alt={name} className="w-full h-96 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-gray-700 text-lg">{short_d}</p>
      </div>
    </div>
   )
}

export default Details;
