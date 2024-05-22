import React, {useState, useEffect} from 'react';
import { BsChatSquareDots } from 'react-icons/bs';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars
} from 'react-icons/fa'



const Navbar = () => {
  const [nav, setNav]  = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className='hidden sm:flex px-4'>
        <li className='hover:-translate-y-1 duration-200'> 
          <a href="#">Home</a>
        </li>
        <li className='hover:-translate-y-1 duration-200'>
          <a href="#gallary">Gallary</a>
        </li>
        <li className='hover:-translate-y-1 duration-200'>
          <a href="#deals">Deals</a>
        </li>
        <li className='hover:-translate-y-1 duration-200'>
          <a href="#contacts">Contacts</a>
        </li>
      </ul> 
      <div className='flex justify-between'>
        <FaFacebookF className='mx-4'/>
        <FaTwitter className='mx-4'/>
        <FaGooglePlusG className='mx-4'/>
        <FaInstagram className='mx-4'/>
      </div>
      {/* Hamberger icons */}
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-8 cursor-pointer'/>
      </div>
      {/* Mobile menu */}
      <div 
      onClick={handleNav}
      className= { nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 top-0 left-0 w-full h-screen bg-black/90 px-2 py-10 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
      <ul className='w-full h-full text-center pt-12'>
        <li className='text-2xl py-8'>
          <a href="#">Home</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#gallary">Gallary</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#deals">Deals</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar