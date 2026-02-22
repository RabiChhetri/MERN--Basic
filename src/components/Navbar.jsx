import React from 'react'
import {NavLink,Link} from 'react-router-dom'

const Navbar = () => {
  const navItem=[
    {title:'Home',path:'/'},
    {title:'About',path:'/about'},
    {title:'Contact',path:'/contact'},
  ]
  return (
    <>
   <nav className='bg-blue-500 text-white'>
    <div className='flex justify-between items-center text-xl px-6'>
        <h2 className='font-extrabold '>Coding</h2>
        <div className='flex justify-center items-center gap-18  px-10 font-bold my-4.5 '>
          {
            navItem.map((item)=>
            <NavLink  key={item.path} to={item.path} className={({isActive})=>isActive?'text-black bg-white rounded transition duration-300 px-3 py-1':'text-white px-3 py-1'}>{item.title}</NavLink>
            )
          }
        </div>
    </div>
   </nav>
      
    </>
  )
}

export default Navbar
