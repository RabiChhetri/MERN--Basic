import React from 'react'

const App = () => {
  return (
    <div>
      <form action="">
        <span>Name:</span>
        <input type="text" placeholder='Enter your name'/>
        <br />
        <span>Email:</span>
        <input type="email" placeholder='Enter your name'/>
        <br />
        <span>Phone:</span>
        <input type="number" placeholder='Enter your phone'/>
        <br />
        <span>password:</span>
        <input type="password" placeholder='Enter your password'/>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
