// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../Apis/Api";
// import Home from "./Home";
// const Register = () => {
//     const router= useNavigate();
//     const [formData, setformData] = useState({
//         name:'',
//         email:'',
//         password:'',
//         confirmPassword:''
//     })
//     const updateInput=(e)=>{
//         setformData((prevState)=>({
//             ...prevState,[e.target.name]:e.target.value
//         }))
//     }
//     const handleSubmit=async(e)=>{
//         e.preventDefault()
//         console.log('Form Submitted')
//         if (formData.password===formData.confirmPassword){
//             const result=await registerUser(formData)
//             console.log(result)
//             router('/');
            
//         }
//         else{
//             console.log('Password is not match Ma   tch')
//         }
//     }
//   return (
//     <div className="register-container">
//       <form className="register-card" onSubmit={handleSubmit}>
//         <h2>Create Account</h2>
//         <p>Join us and start shopping today!</p>

//         <input name='name' onChange={updateInput} type="text" placeholder="Full Name" required  value={formData.name}/>
//         <input name='email' onChange={updateInput} type="email" placeholder="Email" required  value={formData.email}/>
//         <input name='password' onChange={updateInput} type="text" placeholder="Password" required value={formData.password}/>
//         <input name='confirmPassword' onChange={updateInput} type="text" placeholder="Confirm Password" required  value={formData.confirmPassword}/>

//         <button type="submit">Register</button>

//         <span className="extra">
//           Already have an account? <Link to="/login">Login</Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const Register = () => {
  const {register,handleSubmit}=useForm()
  const handleLoginForm=(e)=>{
    console.log('Form Submmitted',e)
  }
  return (
    <div className="register-container">
      <form action="" className="register-card" onSubmit={handleSubmit(handleLoginForm)}>
        <h1>Create Account</h1>
        <p>Join us and start shopping today!</p>

        <input type="text" placeholder='Enter your username' {...register('username')}/>
        <input type="text" placeholder='Enter your email' {...register('email')}/>
        <input type="text" placeholder='Enter your password' {...register('password')}/>

        <button type='submit'>Register</button>
        <span className="extra">Already have an account? <a>Login</a></span>
      </form>
    </div>
  )
}

export default Register
