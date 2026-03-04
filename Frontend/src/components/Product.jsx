import React from "react";

const products = [
  { id:1, name:"Running Shoes", price:"$59", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", description:"Comfortable running shoes for everyday jogs and workouts." },
  { id:2, name:"Wireless Headphones", price:"$99", img:"https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=500", description:"High-quality wireless headphones with noise cancellation." },
  { id:3, name:"Smart Watch", price:"$120", img:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500", description:"Track your fitness, sleep, and notifications on the go." },
  { id:4, name:"Leather Backpack", price:"$75", img:"https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500", description:"Stylish leather backpack for travel and daily use." },
  { id:5, name:"Sunglasses", price:"$40", img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500", description:"UV-protected sunglasses with modern design." },
  { id:6, name:"Camera", price:"$350", img:"https://images.unsplash.com/photo-1519183071298-a2962eadc53e?w=500", description:"Capture your moments with a high-resolution camera." },
  { id:7, name:"Laptop", price:"$900", img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", description:"Powerful laptop for work, gaming, and entertainment." },
  { id:8, name:"Gaming Mouse", price:"$35", img:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500", description:"Ergonomic gaming mouse with customizable buttons." },
  { id:9, name:"Mechanical Keyboard", price:"$110", img:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", description:"Durable mechanical keyboard with RGB lighting." },
  { id:10, name:"Smartphone", price:"$699", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500", description:"Latest smartphone with powerful performance and camera." },
  { id:11, name:"Tablet", price:"$450", img:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500", description:"Portable tablet for work and entertainment on the go." },
  { id:12, name:"Bluetooth Speaker", price:"$65", img:"https://images.unsplash.com/photo-1585386959984-a41552231658?w=500", description:"Compact Bluetooth speaker with rich sound quality." },
  { id:13, name:"Fitness Band", price:"$55", img:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500", description:"Track your daily steps, calories, and heart rate." },
  { id:14, name:"Office Chair", price:"$180", img:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500", description:"Ergonomic office chair for long working hours." },
  { id:15, name:"Desk Lamp", price:"$30", img:"https://images.unsplash.com/photo-1507477338202-487281e6c27e?w=500", description:"Adjustable desk lamp for reading and work." },
  { id:16, name:"Water Bottle", price:"$15", img:"https://images.unsplash.com/photo-1526401485004-2fa806b9d1c6?w=500", description:"Reusable water bottle to keep you hydrated." },
  { id:17, name:"Travel Bag", price:"$95", img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", description:"Durable travel bag for short trips and daily use." },
  { id:18, name:"Perfume", price:"$85", img:"https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500", description:"Fragrance perfume with long-lasting scent." },
  { id:19, name:"Gaming Controller", price:"$70", img:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500", description:"Responsive gaming controller for consoles and PC." },
  { id:20, name:"Smart TV", price:"$1200", img:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500", description:"4K Smart TV with streaming apps and crisp display." }
];

const Product = () => {
  return (
    <div className="product-page">

      <h1 className="title">Our Products</h1>

      <div className="product-container">
        {products.map(item => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name}/>
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="description">{item.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Product;