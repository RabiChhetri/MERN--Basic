import React from 'react'
import { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    password:''
  })
  const updateValue=(e)=>{
    setFormData((prevState)=>(
      {...prevState,[e.target.name]:e.target.value}
    ))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('Form Submitted')
  }

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
      </form>
    </div>
  )
}

export default App
