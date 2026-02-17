import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState(['Apple','Mango','Banana'])
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
  const indexChange=(e)=>{
    setIndex(e.target.value)
  }
  // const valueChange=()=>{
  //   alert(`The value added is ${formData}`)
  //   setArray([...array,formData])
  //   setFormData('')
  // }
  const valueChange=()=>{
    if(setIndex==0||setIndex==null && formData=='' || formData=='null'){
      alert('Please Enter the plase')
    }
    else{
      const newArray=[...array.slice(0,index),formData,...array.slice(index)]
      setArray([...newArray])
      setFormData('')
      setIndex('')
    }
  }
  const filterTheShit=()=>{
    let filterValue=array?.filter(item=>item.length%2==0)
    setFilterArray([...filterValue])
  }


  return (
    <>
    <div>
      <h1>The value of Counter is {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>

    <div>
      <h2>Array and Shift</h2>
      <ul>
        {
          array?.map((item,index)=>
          <li key={index}>{item}</li>
          )
        }
      </ul>
      <input type="text" value={formData} onChange={valueUpdate}/>
      <input type="number" value={index} onChange={indexChange}/>
      <button onClick={valueChange}>Add</button>
    </div>

    <div>
      <h2>Filter the array</h2>
      <button onClick={filterTheShit}>Filter the array</button>
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

export default App
