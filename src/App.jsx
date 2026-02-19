/*import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState(['Apple','Orange','Banana'])
  const [filterArray, setFilterArray] = useState([])
  const [formData, setFormData] = useState('')
  const [index, setIndex] = useState('')

  const handleIncrease=()=>{
    setCount((prev)=>prev+1)
  }

  const handleDecrease=()=>{
    if(count==0){
      setCount(0)
    }
    else{
      setCount((prev)=>prev-1)
    }
  }

  const valueUpdate=(e)=>{
    setFormData(e.target.value)
  }

  const indexUpdate=(e)=>{
    setIndex(e.target.value)
  }

  const valueChange=()=>{
    if(setIndex==''||setIndex=='null' && formData=='' || formData=='null'){
      alert('Please Enetr the place')
    }
    else{
      const newArray=[...array.slice(0,index),formData,...array.slice(index)]
      setArray([...newArray])
      setFormData('')
      setIndex('')
    }
  }

  // const valueChange=()=>{
  //   alert(`the valude added is ${formData}`)
  //   setArray([...array,formData])
  //   setFormData('')
  // }

  const filterTheShift=()=>{
    const filterValue=array?.filter(item=>item.length%2==0)
    setFilterArray([...filterValue])
  }



  return (
    <>
      <div>
        <h1>the value of count is {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
      <div>
      <h2>Array And Shift</h2>
      <ul>
        {
          array?.map((item,index)=>
            <li key={index}>{item}</li>
          )
        }
        <input type="text" value={formData} onChange={valueUpdate}/>
        <input type="number" value={index} onChange={indexUpdate}/>
        <button onClick={valueChange}>Add</button>
      </ul>
      </div>
      <div>
        <h2>Filter and Shift</h2>
        <button onClick={filterTheShift}>filter the array</button>
        <ul>
          {
            filterArray?.map((item,index)=>
            <li key={index}>{item}</li>
            )
          }
        </ul>
      </div>
    </>
  )
}

export default App */


import React from 'react'
import { useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([
  {
    id: 1,
    name: "Laptop",
    price: 800,
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Headphones",
    price: 50,
    category: "Accessories",
    inStock: true
  },
  {
    id: 3,
    name: "Keyboard",
    price: 30,
    category: "Accessories",
    inStock: false
  },
  {
    id: 4,
    name: "Smartphone",
    price: 600,
    category: "Electronics",
    inStock: true
  }
])
  return (
    <div>
      <h1>Prodcts</h1>
      <ul>
        {products.map((item)=>
        <div key={item.id}>
          <div>
            <span>Name:</span>
            <span>{item.name}</span>
            <button>Add to Cart</button>
          </div>
        </div>
        )}
      </ul>
    </div>
  )
}

export default App
