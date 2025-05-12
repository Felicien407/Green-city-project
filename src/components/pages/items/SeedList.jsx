import React from 'react'
import Seeds from "../../../../data/Seeds.json"
import Card from './card'

const SeedList = () => {
  return (
    <div className='w-full h-full flex flex-wrap items-center justify-center grid-cols-4 gap-6'>
      {Seeds.map((seed) => {
         return (
           <Card
             key={seed.id}
             image={seed.image}
             name={seed.name}
             short_d={seed.short_d}
           />
         );
      })}

    </div>
  )
}

export default SeedList