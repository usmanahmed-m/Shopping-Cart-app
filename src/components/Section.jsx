import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./section/Cart";
import { Details } from "./section/Details";
import { Payment } from "./section/Payment.jsx";
import { Products } from "./section/Products";

export const Section = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </section>
  );
};
