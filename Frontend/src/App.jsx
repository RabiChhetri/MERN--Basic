import React, { useState } from 'react'
import { registerUser } from './Apis/authApi'
const App = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    password:''
  })
  const [display, setDisplay] = useState({})
  const updateValue=(e)=>{
    setFormData((prevState)=>({...prevState,[e.target.name]:e.target.value}))
  }
  const handleSubmit=async(e)=>{
    console.log('Form Submitted')
    e.preventDefault()
   const result=await registerUser(formData)
   console.log(result)
   setDisplay(result?.data)
  }
  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <span>Name:</span>
        <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={updateValue}/>
        <br />
        <span>Email:</span>
        <input type="email" name="email" placeholder='Enter your name' value={formData.email} onChange={updateValue}/>
        <br />
        <span>Phone:</span>
        <input type="number" name="phone" placeholder='Enter your phone' value={formData.phone} onChange={updateValue}/>
        <br />
        <span>password:</span>
        <input type="text" name="password" placeholder='Enter your password' value={formData.password} onChange={updateValue}/>
        <br />
        <button>Submit</button>
      </form>
     <ul>
      <h2>
        {Object.entries(display).map(([key,value],index)=>
        <li key={index}>{key}:{value}</li>
        )}
      </h2>
     </ul>
    </div>
    </>
  )
}

export default App
