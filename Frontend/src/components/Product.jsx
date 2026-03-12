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
    console.log(products.name)
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
    </div>

  );
};

export default Product;