import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <h1 className='text-3xl font-bold'>Contact Page</h1>
      <Link to='/contact/me' className='bg-blue-400 rounded px-5 py-1 text-white'>Me</Link>
      <Link to='/contact/company' className='bg-blue-400 rounded px-5 py-1 text-white'>Company</Link>
    </div>
  )
}

export default Contact
