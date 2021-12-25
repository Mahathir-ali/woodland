import React from "react";
import Products from "../../Products/Products";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Feature from "../Features/Feature";
import Blog from "../Blog/Blog";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Feature />
      <Products />
      <Discount />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
