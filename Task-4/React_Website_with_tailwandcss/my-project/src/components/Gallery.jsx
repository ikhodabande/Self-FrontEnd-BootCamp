import React from 'react';
import ga1 from '../assetes/ga1.avif';
import ga2 from '../assetes/ga2.avif';
import ga3 from '../assetes/ga3.avif';
import ga4 from '../assetes/ga4.avif';
import ga5 from '../assetes/ga5.avif';


function Gallery() {
  return (
    <div id='gallary' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>

      <div className='grid sm:grid-cols-5 gap-4' >
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full h-full object-cover grayscale hover:scale-105 duration-500 hover:cursor-pointer hover:grayscale-0 hover:shadow-xl' src={ga1} alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover grayscale hover:scale-105 duration-500 hover:cursor-pointer hover:grayscale-0 hover:shadow-xl' src={ga2} alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover grayscale hover:scale-105 duration-500 hover:cursor-pointer hover:grayscale-0 hover:shadow-xl' src={ga3} alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover grayscale hover:scale-105 duration-500 hover:cursor-pointer hover:grayscale-0 hover:shadow-xl' src={ga4} alt="" />
        </div>
        <div>
          <img className='w-full h-full object-cover grayscale hover:scale-105 duration-500 hover:cursor-pointer hover:grayscale-0 hover:shadow-xl' src={ga5} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Gallery 