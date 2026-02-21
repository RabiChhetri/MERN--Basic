import React from 'react'
import { useForm } from "react-hook-form"
const Form = () => {
    console.log('App Rendering')
   const {register,handleSubmit} = useForm()
   const hanldeLogin=(data)=>{
    console.log(data)
   }
  return (
    <div>
        <form onSubmit={handleSubmit(hanldeLogin)}>
            <h3>Login Form</h3>
            <input type="text" placeholder='Enter a name' {...register('username')}/>
            <br />
            <br />
            <input type="text" placeholder='Enter a password' {...register('password')}/>
            <br />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Form
