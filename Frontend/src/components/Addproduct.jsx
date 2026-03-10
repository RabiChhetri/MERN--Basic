import React, { useState } from "react";
const Addproduct = () => {
    
  return (
    <div className="add-product-container">
        <form className="product-form">
            <h2>Add New Product</h2>
            <input type="text" name="name" placeholder="Enter a product name"/>
            <input type="number" name="price" placeholder="Enter a price"/>
            <input type="file"/>
            <button type='submit'>Add Product</button>
        </form>
    </div>
  );
};

export default Addproduct;