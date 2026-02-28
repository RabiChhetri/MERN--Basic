import React, { useEffect } from 'react'
import { useState } from 'react'
import {  registerUser,loginUser, getUserDetails } from './Apis/authApi'

const App = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    password:''
  })
  const [loginData, setLoginData] = useState({
    email:'',
    password:''
  })
  const [loggedIn, setLoggedIn] = useState()
  const [display, setDisplay] = useState()
    const updateLogin=(e)=>{
    setLoginData((prevState)=>({
      ...prevState,[e.target.name]:e.target.value
    }))
  }
  const handleLogin=async(e)=>{
    console.log('Form Login')
    e.preventDefault()
    const result=await loginUser(loginData)
    console.log(result)
    console.log(result.isUserAlreadyExists.name)
  }
  const updateValue=(e)=>{
    setFormData((prevState)=>(
      {...prevState,[e.target.name]:e.target.value}
    ))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log('Form Submitted')
   const result=await registerUser(formData)
  }
  useEffect(()=>{
    async function verifyData() {
      const result=await getUserDetails()
      console.log(result)
      setDisplay(result.user.name)
    }
   
    verifyData()
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Name:</span>
        <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={updateValue}/>
        <br />
        <span>Email:</span>
        <input type="email" name="email" placeholder='Enter your email'value={formData.email} onChange={updateValue}/>
        <br />
        <span>Phone:</span>
        <input type="number" name="phone" placeholder='Enter your phone number' value={formData.phone} onChange={updateValue}/>
        <br />
        <span>Password:</span>
        <input type="text" name="password" placeholder='Enter your password' value={formData.password} onChange={updateValue}/>
        <br />
        <button>Submit</button>
      </form >
      <br />
      <br />
      <form onSubmit={handleLogin}>
        <span>email:</span>
        <input type="text" placeholder='Enter your name' name='email' value={loginData.email} onChange={updateLogin}/>
        <br />
        <span>password:</span>
        <input type="text" placeholder='Enter your password' name='password' value={loginData.password} onChange={updateLogin}/>
        <br />
        <button>login</button>
      </form>
      <h1>{display}</h1>
    </div>
  )
}

export default App
