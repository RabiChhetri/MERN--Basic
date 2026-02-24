import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    password:''
  })
  const updateValue=(e)=>{
    setFormData((prevState)=>({...prevState,[e.target.name]:e.target.value}))
  }
  const handleSubmit=async(e)=>{
    console.log('Form Submitted')
    e.preventDefault()
    const response=await fetch('http://localhost:3000/send',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const data=await response.json()
    console.log(data)
  }
  return (
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
    </div>
  )
}

export default App
