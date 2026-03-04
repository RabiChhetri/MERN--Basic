import React from "react";
const products = [
  {
    id: 1,
    name: "Sneakers",
    price: "$59",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
  },
  {
    id: 2,
    name: "Headphones",
    price: "$99",
    img: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=400"
  },
  {
    id: 3,
    name: "Watch",
    price: "$120",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400"
  },
  {
    id: 4,
    name: "Backpack",
    price: "$75",
    img: "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=400"
  }
];

const Home = () => {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Shop Smart. Shop Fast.</h1>
          <p>Discover amazing products at unbeatable prices.</p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map(item => (
            <div className="card" key={item.id}>
              <img src={item.img} alt={item.name}/>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Limited Time Offer</h2>
        <p>Get 30% off on selected items</p>
        <button>Grab Deal</button>
      </section>

    </div>
  );
};

export default Home;