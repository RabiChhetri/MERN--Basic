import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState(['Apple','Mango','Banana'])

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
    </div>
    </>
    
  )
}

export default App
