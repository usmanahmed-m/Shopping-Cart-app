import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "../css/Products.css";

export const Products = () => {
  const { products, addProduct } = useContext(GlobalContext);

  return (
    <div id="product">
      {products.map((product) => (
        <div className="card" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.src} alt="" />
          </Link>
          <div className="content">
            <h3>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h3>
            <span>${product.price}</span>
            <p>{product.description}</p>
            <button onClick={() => addProduct(product._id)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
