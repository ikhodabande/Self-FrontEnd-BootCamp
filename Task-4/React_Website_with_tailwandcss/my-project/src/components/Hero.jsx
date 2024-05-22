import React from 'react';
import backGround from '../assetes/bg.avif';

function Hero() {
  return (
    <div className='w-full max-w-[1600px] h-[90vh]  '>
      <img  src={backGround} alt="/" 
      className='w-full  h-full object-cover -z-10 overflow-hidden bg-cover'
      />

    <div className='max-w-[1140px] '>
      <div className= 'absolute top-[40%] w-full md:-[50%] max-width-[600px] h-full flex flex-col text-white p-4'>

        <h1 className='font-bold text-4xl'>Take your special offers</h1>
        <h2 className='font-bold text-4xl py-4 italic'>happy trips</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis libero cum ullam,
           rerum praesentium architecto earum aut reprehenderit! Nihil.</p>

      </div>
    </div> 
    </div>
  )
}

export default Hero;