import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState(['Apple','Mango','Banana'])
  const [formData, setFormData] = useState('')

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
  const valueChange=()=>{
    alert(`The value added is ${formData}`)
    setArray([...array,formData])
    setFormData('')
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
          <li>{item}</li>
          )
        }
      </ul>
      <input type="text" value={formData} onChange={valueUpdate}/>
      <button onClick={valueChange}>Add</button>
    </div>
    </>
    
  )
}

export default App
