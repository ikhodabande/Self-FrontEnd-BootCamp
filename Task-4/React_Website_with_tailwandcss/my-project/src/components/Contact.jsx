import React from 'react';
import contact from '../assetes/contact.avif';

function Contact() {
  return (
    <div id='contacts' className='max-w-[1140px] py-16 m-auto'>
      <h2 className='text-center text-gray-700'>Send us a message</h2>
      <p className='text-center text-gray-700 py-2'>We're standing by!</p>
      <div className='grid md:grid-cols-2 '>
      <img 
      className='w-screen md:h-full object-cover p-2 max-h-[500px] h-[200px] '
      src={contact} alt="" />
      <form className=''>
        <div className=' grid sm:grid-col-2 grid-cols-1'>
          <input className='border p-2 m-2' type="text" placeholder='First'/> 
          <input className='border p-2 m-2' type="text" placeholder='Last'/> 
          <input className='border p-2 m-2' type="email" placeholder='Email'/> 
          <input className='border p-2 m-2' type="tel" placeholder='Phone'/> 
          <input className='border p-2 m-2 col-span-2' type="text" placeholder='Address'/> 
          <textarea className='col-span-2 p-2 m-2 border' cols="30" rows="10"></textarea>
          <button className='col-span-2 m-2'>Submit</button>
        </div>
      </form>
     </div>
    </div>
  )
}

export default Contact