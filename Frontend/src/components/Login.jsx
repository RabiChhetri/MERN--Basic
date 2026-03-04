import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">

      <form className="login-card">

        <h2>Welcome Back</h2>
        <p>Please login to your account</p>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>

        <span className="extra">
          Don't have an account?<Link to='/register'>Register</Link>
        </span>

      </form>

    </div>
  );
};

export default Login;