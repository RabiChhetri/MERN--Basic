import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
       <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">E-Commerce</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/productupload">Add Product</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register" className="btn">Register</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
