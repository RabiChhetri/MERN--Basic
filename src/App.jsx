import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState(['Apple','Mango','Banana'])
  const [filterArray, setFilterArray] = useState([])
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
          <li>{item}</li>
          )
        }
      </ul>
      <input type="text" value={formData} onChange={valueUpdate}/>
      <button onClick={valueChange}>Add</button>
    </div>

    <div>
      <h2>Filter the array</h2>
      <button onClick={filterTheShit}>Filter the array</button>
      <ul>
        {
          filterArray?.map((item)=>
          <li>{item}</li>
          )
        }
      </ul>
    </div>
    </>
    
  )
}

export default App
