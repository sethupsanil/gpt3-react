import "./App.css";

import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  WhatGpt3,
  Possibility,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";
function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  );
}
export default App;
