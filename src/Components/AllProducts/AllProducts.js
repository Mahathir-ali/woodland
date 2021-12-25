import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import TopProducts from "./TopProducts/TopProducts";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allProduct`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div>
      <Navigation />
      <Container className="mt-5 ">
        <h2>Top Selling</h2>
        <div className="pd_container">
          {allProducts.map((items) => (
            <TopProducts key={items._id} items={items}></TopProducts>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
