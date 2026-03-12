import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../Apis/productApi";
import React, { useState } from "react";

const Product = () => {

  const [cart, setCart] = useState([])

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProductDetails
  });


  if (isLoading) {
    return <h2 style={{textAlign:"center"}}>Loading Products...</h2>;
  }

  if (isError) {
    return <h2 style={{textAlign:"center"}}>Error loading products</h2>;
  }

  const addToCart=(id)=>{
    const products=data?.product?.find(item=>item._id===id)
    setCart((prevState)=>[...prevState,products])
    console.log(cart)
  }

  return (
    <div className="shop-container">
      {/* PRODUCT SECTION */}
      <div className="product-page">
        <h1 className="title">Our Products</h1>
        <div className="product-container">
          {data?.product?.map((item) => (
            <div className="product-card" key={item._id}>
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <button
                className="cart-btn" onClick={()=>addToCart(item._id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Cart Section */}
      <div className="cart-box">
        <h2>🛒Added in Cart {cart.length}</h2>
        {cart.length===0?(<p className="empty-cart">Cart is Empty</p>):(
          <>
          {cart.map((item,index)=>
          <div className="cart-item" key={index}>
            <img src={item.imageUrl} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
          </div>
          )}
          </>
        )}
      </div>
    </div>

  );
};

export default Product;