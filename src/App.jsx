import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestBooks from "./components/BestBooks";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <BestBooks />
      </div>
    </>
  );
};

export default App;
