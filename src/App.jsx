import React, { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#60072C] via-[#120B2E] to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-10">
      <Header />
      <br />
      <br />

      <Hero />
    </div>
  );
}

export default App;
