import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestBooks from "./components/BestBooks";
import Banner from "./components/Banner";

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <BestBooks />
        <Banner />
      </div>
    </>
  );
};

export default App;
