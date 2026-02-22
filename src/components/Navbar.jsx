import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <nav className='bg-blue-500 text-white'>
    <div className='flex justify-between items-center text-xl px-4.5'>
        <h2 className='font-extrabold '>Coding</h2>
        <div className='flex justify-center items-center gap-15 px-15 font-bold my-4.5 '>
            <Link to='/' className='hover:text-black transition duration-300'>Home</Link>
            <Link to='/about' className='hover:text-black transition duration-300'>About</Link>
            <Link to='/contact' className='hover:text-black transition duration-300'>Contact</Link>
        </div>
    </div>
   </nav>
      
    </>
  )
}

export default Navbar
