import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Colors } from "./Colors";
import "../css/Details.css";

export const Cart = () => {
  let { cart, incrementItem, decrementItem } = useContext(GlobalContext);

  return (
    <>
      {cart.map((item) => (
        <div className="details" key={item._id}>
          <img src={item.src} alt="" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <Colors colors={item.colors} />
            <p>{item.description}</p>
            <p>{item.content}</p>
            <div className="amount">
              <button className="count" onClick={() => decrementItem(item._id)}>
                -
              </button>
              <span>{item.count}</span>
              <button className="count" onClick={() => incrementItem(item._id)}>
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
