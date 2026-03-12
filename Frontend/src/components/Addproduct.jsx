import React, { useState } from "react";
import { createProduct,getProductDetails} from "../Apis/productApi";
import { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
const Addproduct = () => {

    const {data,isLoading,isError}=useQuery({
        queryKey:['products'],
        queryFn:getProductDetails
    })
    
    const createMutation=useMutation({
        mutationFn:({product})=>createProduct({product}),
        onSuccess:(data)=>{
            alert(data.message)
        },
        onError:(error)=>{
            console.log('error')
        }
    })

    const [product, setProduct] = useState({
        name:'',
        price:'',
        image:null
    })
    const updateValue=(e)=>{
        setProduct((prevState)=>({
            ...prevState,[e.target.name]:e.target.value
        }))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        createMutation.mutate({product})
     }
    const handleImage=(e)=>{
         setProduct({
            ...product,
            image:e.target.files[0]
        })
    }
  return (
    <div className="add-product-container">
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <input type="text" name="name" placeholder="Enter a product name" value={product.name}  onChange={updateValue}/>
            <input type="number" name="price" placeholder="Enter a price" value={product.price} onChange={updateValue}/>
            <input type="file" name="image" onChange={handleImage}/>
            <button type='submit'>Add Product</button>
        </form>
        {data?.product?.map((item,index)=>
        <li>{item.name}</li>
        )}
    </div>
  );
};

export default Addproduct;