import React, { useState } from "react";
const Addproduct = () => {
    const [product, setProduct] = useState({
        name:'',
        price:''
    })
    const updateValue=(e)=>{
        setProduct((prevState)=>({
            ...prevState,[e.target.name]:e.target.value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Form Submitted')
        console.log(product.name)
    }
  return (
    <div className="add-product-container">
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <input type="text" name="name" placeholder="Enter a product name" value={product.name}  onChange={updateValue}/>
            <input type="number" name="price" placeholder="Enter a price" value={product.price} onChange={updateValue}/>
            <input type="file" name="image"/>
            <button type='submit'>Add Product</button>
        </form>
    </div>
  );
};

export default Addproduct;