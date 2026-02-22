import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  const handleLogin=()=>{
    navigate('/login')
  }
  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen' >
        <h1 className='text-3xl font-bold'>Home Page</h1>
        <button onClick={handleLogin} className='bg-blue-700 text-white text-xl rounded py-1.5 px-7'>Login</button>
    </div>
  )
}

export default Home
