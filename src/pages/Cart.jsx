import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = ({ items, setItems }) => {
  const plus = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const minus = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const totalQty = items.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="cart">
      <div className="left-card">
        <h2>Cart</h2>

        {items.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul className="cart-ul">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-img" />

                <div className="cart-info">
                  <p>{item.title}</p>
                  <p>{item.memory}</p>
                </div>

                <button onClick={() => minus(item.id)} className="count-btn">
                  <FiMinus />
                </button>

                <span className="total">{item.qty}</span>

                <button onClick={() => plus(item.id)} className="count-btn">
                  <FaPlus />
                </button>
                <p className="item-price">{item.price}$</p>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="delete-btn"
                >
                  <MdOutlineCancel />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="right-card">
        <h2 className="total-title">Order Summary</h2>
        <form className="total-form">
          <label className="ipn-label">Discount code / Promo code</label>
          <input type="text" placeholder="Code" className="form-inp" />

          <label className="card-label">Your bonus card number</label>
          <div className="btn-inp">
            <input
              type="text"
              placeholder="Enter Card Number"
              className="number-inp"
            />
            <button className="apply-btn">Apply</button>
          </div>
          <div className="total-price">
            <div className="price-row">
              <h3>Subtotal:</h3>
              <p>{totalQty}</p>
            </div>

            <div className="price-row">
              <h3>Total:</h3>
              <p>{totalPrice}$</p>
            </div>
          </div>
          <Link to="/step1">
          <button className="check">Checkout</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Cart;
