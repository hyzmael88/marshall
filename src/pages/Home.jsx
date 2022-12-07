import React from "react";
import About from "../components/About";
import FAQS from "../components/FAQS";
import Hero from "../components/Hero";
import Products from "../components/Products";

function Home() {
  return (
    <>
   <Hero/>
   <About/>
   <Products/>
   <FAQS/>
   </>
  );
}

export default Home;
