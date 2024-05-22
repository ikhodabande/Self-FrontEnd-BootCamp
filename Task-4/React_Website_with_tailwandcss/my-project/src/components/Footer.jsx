import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs'

function Footer() {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
      <div className='flex items-center m-auto justify-center'>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mx-2'/>
        <h1 className='font-bold'>WEEKAWAY</h1>
      </div>
    </div>
  )
}

export default Footer