import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { Colors } from "./Colors";
import "../css/Details.css";

export const Details = () => {
  const params = useParams();

  const { products, addProduct } = useContext(GlobalContext);

  const filterProduct = products.filter((product) => product._id === params.id);

  return (
    <>
      {filterProduct.map((item) => (
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
            <button className="cart" onClick={() => addProduct(item._id)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
