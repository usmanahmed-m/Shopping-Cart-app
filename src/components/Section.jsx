import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./section/Cart";
import { Details } from "./section/Details";
import { Products } from "./section/Products";

export const Section = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/contact" element={<Products />} />
        <Route path="/about" element={<Products />} />
        <Route path="/login" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </section>
  );
};
