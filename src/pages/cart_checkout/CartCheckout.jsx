import React, { useState } from "react";
import "./cart_checkout.css";

const CartCheckout = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Never Split The Difference",
      pricePerUnit: 0.89,
      quantity: 2,
    },
    {
      id: 2,
      name: "What Management Is",
      pricePerUnit: 3.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "Performance Management",
      pricePerUnit: 1.99,
      quantity: 2,
    },
  ]);

  
  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + change, 0),
            }
          : item
      )
    );
  };

  
  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.pricePerUnit * item.quantity,
      0
    );
    const shipping = 3.99;
    const tax = 2.0;
    const total = subtotal + shipping + tax;

    return { subtotal: subtotal.toFixed(2), shipping, tax, total: total.toFixed(2) };
  };

  const totals = calculateTotal();

  return (
    <div className="container">
      <main className="cart">
        <div className="cart-items">
          <h2>Cart</h2>
          <p>{cartItems.length} items</p>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <p className="item-name">{item.name}</p>
                <p>${item.pricePerUnit.toFixed(2)} / lb</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
              </div>
              <p className="item-price">
                ${(item.pricePerUnit * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h3>Order summary</h3>
          <p>Subtotal: ${totals.subtotal}</p>
          <p>Shipping: ${totals.shipping.toFixed(2)}</p>
          <p>Tax: ${totals.tax.toFixed(2)}</p>
          <h4>Total: ${totals.total}</h4>
          <button className="checkout-button">Check out →</button>
        </div>
      </main>
    </div>
  );
};

export default CartCheckout;
