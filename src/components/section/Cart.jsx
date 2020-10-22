import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Colors } from "./Colors";
import "../css/Details.css";

export const Cart = () => {
  const { cart } = useContext(GlobalContext);

  console.log("Cart   ", cart);

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
          </div>
        </div>
      ))}
    </>
  );
};
