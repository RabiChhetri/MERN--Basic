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
//             console.log('Password is not match Match')
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



import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser } from "../Apis/Api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const password = watch("password");
  const router=useNavigate()

  const handleRegisterForm = async(data) => {
    console.log("Form Submitted");
    const result=await registerUser(data)
    console.log(result)
    router('/')
  };

  return (
    <div className="register-container">
      <form
        className="register-card"
        onSubmit={handleSubmit(handleRegisterForm)}
      >
        <h1>Create Account</h1>
        <p>Join us and start shopping today!</p>

        {/* Username */}
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name", {
            required: "Username is required",
          })}
        />
        {errors.name && (
          <p className="error-message">{errors.name.message}</p>
        )}

        {/* Email */}
        <input
          type="text"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            maxLength: {
              value: 10,
              message: "Password cannot be more than 10 characters",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,10}$/,
              message:
                "Password must contain uppercase, lowercase and number",
            },
          })}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            validate: (value) =>
              value === password || "Password do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="error-message">
            {errors.confirmPassword.message}
          </p>
        )}

        <button type="submit">Register</button>

        <span className="extra">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;