import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Colors } from "./Colors";
import "../css/Details.css";
import { Link } from "react-router-dom";
import "../css/Cart.css";

export const Cart = () => {
  let {
    cart,
    incrementItem,
    decrementItem,
    removeProduct,
    total,
    getTotal,
  } = useContext(GlobalContext);

  useEffect(() => {
    getTotal();
  }, []);

  if (cart.length === 0) {
    return (
      <h2 style={{ color: "teal", textAlign: "center" }}>Your Cart is Empty</h2>
    );
  } else
    return (
      <>
        {cart.map((item) => (
          <div className="details cart" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price * item.count}</span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="amount">
                <button
                  className="count"
                  onClick={() => decrementItem(item._id)}
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  className="count"
                  onClick={() => incrementItem(item._id)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item._id)}>
              X
            </div>
          </div>
        ))}
        <div className="total">
          <Link to="/payment">Payment</Link>
          <h3>Total: ${total}</h3>
        </div>
      </>
    );
};
