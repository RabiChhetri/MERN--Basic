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


/*import React from 'react'
import { useState } from 'react'

const App = () => {
  const [cart, setCart] = useState([])
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

const addToCart=(id)=>{
  console.log(id)
  const item=products.find((item)=>item.id===id)
  // setCart((preState)=>
  // [...preState,item]
  // )
 console.log(item)
 const isExisting=cart.find((item)=>item.id===id)
 if(!isExisting){
  setCart((prevState)=>
  [...prevState,{...item,quantity:1}])
 }else
 {
  setCart((prevState)=>
  prevState.map((item)=>item.id===id?{...item,quantity:item.quantity+1}:item)
  )
 }
 console.log('This is dcart',cart)
}

const handleDeacrese=(id)=>{
  const item=products.find((item)=>item.id===id)
  console.log(item)
  const isExisting=cart.find((item)=>item.id===id)
  if(!isExisting){
    setCart((prevState)=>{
      [...prevState,{...item,quantity:1}]
    })
  }
  else{
    setCart((prevState)=>
    prevState.map((item)=>item.id===id?item.quantity<=0?{...item,quantity:0}:{...item,quantity:item.quantity-1}:item))
  }
}

  return (
    <>
      <h1>Prodcts</h1>
      <ul>
        {products?.map((item)=>
        <div key={item.id}>
          <div>
            <span>Name:</span>
            <span>{item.name}</span>
            <button onClick={()=>addToCart(item.id)}>Add to Cart</button>
          </div>
        </div>
        )}
      </ul>
      <div>
        <h1>Cart Item</h1>
        <ul>
          {
            cart?.map((item,index)=>
            <>
            <li key={index}>{item.name},{item.quantity}</li>
            <button onClick={()=>handleDeacrese(item.id)}>Decrease Item</button>
            </>
            )
          }
        </ul>
      </div>
    </>
  )
}

export default App*/

import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([
    {
      id: "p001",
      name: "Wireless Headphones",
      price: 129.99,
      category: "Electronics",
      stock: 2,
      quantity: 0,
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
      description: "Noise cancelling wireless headphones with long battery life."
    },
    {
      id: "p002",
      name: "Smart Watch",
      price: 89.99,
      category: "Wearables",
      stock: 30,
      quantity: 0,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description: "Track fitness, heart rate, and notifications on the go."
    },
    {
      id: "p003",
      name: "Running Shoes",
      price: 69.99,
      category: "Fashion",
      stock: 50,
      quantity: 0,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      description: "Lightweight running shoes designed for comfort and speed."
    },
    {
      id: "p004",
      name: "Backpack",
      price: 39.99,
      category: "Accessories",
      stock: 22,
      quantity: 0,
      image: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f",
      description: "Durable waterproof backpack for travel and daily use."
    },
    {
      id: "p005",
      name: "Gaming Mouse",
      price: 49.99,
      category: "Electronics",
      stock: 40,
      quantity: 0,
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
      description: "RGB gaming mouse with adjustable DPI and ergonomic design."
    },
    {
      id: "p006",
      name: "Sunglasses",
      price: 24.99,
      category: "Fashion",
      stock: 60,
      quantity: 0,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      description: "Stylish UV-protected sunglasses for everyday wear."
    }
  ])
  const categories=['All',...new Set(products.map((item)=>item.category))]
  
  const handleIncrease=(id)=>{
   const items=products.find((item)=>item.id===id)
   if(items)
    setProducts((prevState)=>
  prevState.map((item)=>item.id===id?item.quantity<item.stock?{...item,quantity:item.quantity+1}:item:item)
    )
  }

  const handleDecrease=(id)=>{
    const items=products.find((item)=>item.id===id)
    if(items)
    {
      setProducts((prevState)=>
      prevState.map((item)=>item.id===id?item.quantity<=0?{...item,quantity:0}:{...item,quantity:item.quantity-1}:item)
    )
    }
  }

  const addToCart=(id)=>{
    const items=products.find((item)=>item.id===id)
    if(items.quantity===0){
      alert('Items cannot be added to cart if the qunity is 0')
    }
    else{
      const isExiting=cart.find((item)=>item.id===id)
    if(!isExiting){
      setCart((prevState)=>
      [...prevState,items])
    }
    else{
      setCart((prevState)=>
      prevState.map((item)=>item.id===id?{...item,quantity:item.quantity+items.quantity}:item))
    }
    setProducts((prevState)=>prevState.map((item)=>item.id===id?{...item,stock:item.stock-item.quantity,quantity:0}:item))
    console.log('the dcart is',cart)
    }
    
  }
  const categoryChange=(e)=>{
    setSelectedCategory(e.target.value)
  }
  // const filteredProdct=(selectedCategory)=>{
  //   selectedCategory==='All'?products:products.filter((item)=>item.category===selectedCategory)
  // }

  const filteredProdct=selectedCategory==='All'?products:products.filter((item)=>item.category===selectedCategory)




  return (
    <div>
     <div className="nice-one">
      <div className="left-one">
        <div>
          <h1>Category</h1>
          <select value={selectedCategory} onChange={categoryChange}>
            {categories.map((item,index)=>
            <option key={index}>{item}</option>
            )}
          </select>
        </div>
        <h1>Products</h1>
        <ul>
          {filteredProdct.map((item)=>
          <div>
            <div>
              <img src={item.image} alt="item.name" />
            </div>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.stock}</span>
            <div>
              <button onClick={()=>handleDecrease(item.id)}>-</button>
              <input type="text" readOnly value={item.quantity || 0}/>
              <button onClick={()=>handleIncrease(item.id)}>+</button>
              <div>
                <button onClick={()=>addToCart(item.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
          )}
        </ul>
      </div>
      <div className="right-one">
        <h1>Cart</h1>
        {
          cart.length===0?<>
          <span>Cart Is Empty</span></>:<>
          {cart?.map((item)=>
          <div>
            <div>
              <img src={item.image} alt="item.name" />
            </div>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <div>
              <button onClick={()=>handleDecrease(item.id)}>-</button>
              <input type="text" readOnly value={item.quantity || 0}/>
              <button onClick={()=>handleIncrease(item.id)}>+</button>
              <div>
                <button>Processed to Checkout</button>
              </div>
            </div>
          </div>
          )}
          </>
        }
      </div>
     </div>
    </div>
  )
}

export default App

