import React from "react";
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  products: [
    {
      _id: "1",
      title: "Nike Shoes 01",
      src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
      description: "High Top Sneakers Men Casual Shoes",
      content:
        "Men Sneakers Men Casual Shoes Lac-up Men Shoes Lightweight Comfortable Breathable Walking Sneakers Tenis masculino Zapatillas.",
      price: 23,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "2",
      title: "Nike Shoes 02",
      src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
      description: "High Top Sneakers Men Casual Shoes",
      content:
        "Men Sneakers Men Casual Shoes Lac-up Men Shoes Lightweight Comfortable Breathable Walking Sneakers Tenis masculino Zapatillas.",
      price: 19,
      colors: ["red", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "3",
      title: "Nike Shoes 03",
      src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
      description: "High Top Sneakers Men Casual Shoes",
      content:
        "Men Sneakers Men Casual Shoes Lac-up Men Shoes Lightweight Comfortable Breathable Walking Sneakers Tenis masculino Zapatillas.",
      price: 50,
      colors: ["lightblue", "white", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "4",
      title: "Nike Shoes 04",
      src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
      description: "High Top Sneakers Men Casual Shoes",
      content:
        "Men Sneakers Men Casual Shoes Lac-up Men Shoes Lightweight Comfortable Breathable Walking Sneakers Tenis masculino Zapatillas.",
      price: 15,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "5",
      title: "Nike Shoes 05",
      src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
      description: "High Top Sneakers Men Casual Shoes",
      content:
        "Men Sneakers Men Casual Shoes Lac-up Men Shoes Lightweight Comfortable Breathable Walking Sneakers Tenis masculino Zapatillas.",
      price: 10,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "6",
      title: "Nike Shoes 06",
      src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
      description: "High Top Sneakers Men Casual Shoes",
      content:
        "Men Sneakers Men Casual Shoes Lac-up Men Shoes Lightweight Comfortable Breathable Walking Sneakers Tenis masculino Zapatillas.",
      price: 17,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
    },
  ],
  cart: [],
  total: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const { total } = state;

  function addProduct(id) {
    dispatch({
      type: "ADD_TO_CART",
      payload: id,
    });
  }

  function removeProduct(id) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
    getTotal();
  }

  function incrementItem(id) {
    dispatch({
      type: "INCREMENT_ITEM",
      payload: id,
    });
    getTotal();
  }

  function decrementItem(id) {
    dispatch({
      type: "DECREMENT_ITEM",
      payload: id,
    });
    getTotal();
  }

  function getTotal() {
    dispatch({
      type: "GET_TOTAL",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addProduct,
        removeProduct,
        incrementItem,
        decrementItem,
        total,
        getTotal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
