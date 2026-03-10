import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Addproduct from './components/Addproduct'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/productUpload' element={<Addproduct/>}/>
    </Routes>
    </>
  )
}

export default App
