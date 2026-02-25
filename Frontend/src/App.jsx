import React from 'react'

const App = () => {
  return (
    <div>
      <form action="">
        <span>Name:</span>
        <input type="text" name="name" placeholder='Enter your name'/>
        <br />
        <span>Email:</span>
        <input type="email" name="email" placeholder='Enter your email'/>
        <br />
        <span>Phone:</span>
        <input type="number" name="phone" placeholder='Enter your phone number'/>
        <br />
        <span>Password:</span>
        <input type="password" name="name" placeholder='Enter your password'/>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
