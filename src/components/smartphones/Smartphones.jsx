import React from "react";
import "../smartphones/smartphones.css"
import { FaChevronRight } from "react-icons/fa";
import { products } from "../../data";

const Smartphones = ({ addToCart }) => {
  const phoneProducts = products.filter((item) => [1, 2, 17, 3, 4, 6, 7, 8].includes(item.id));

  return (
    <div className="container">
      <div className="header">
        <div className="cat cat-2">Home <FaChevronRight /></div>
        <div className="cat cat-2">Catalog <FaChevronRight /></div>
        <div className="cat cat-3">Smartphones <FaChevronRight /></div>
      </div>

      <div className="phone-products">
        {phoneProducts.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt="product" className="card-img" />
            <h2 className="card-title">{item.title}</h2>
            <p>{item.memory} {item.color}</p>
            <p className="card-price">{item.price}$</p>
            <p>{item.category}</p>
              <button className="card-btn" onClick={() => addToCart(item)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Smartphones;
