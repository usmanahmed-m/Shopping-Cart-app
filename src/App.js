import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { GlobalProvider } from "./components/context/GlobalState";
import { Header } from "./components/Header";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Section />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
