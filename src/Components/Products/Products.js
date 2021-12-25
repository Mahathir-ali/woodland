import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Product from "./Product/Product";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allProduct`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const size = 6;
  const items = products.slice(0, size);

  return (
    <Container className="mt-5 ">
      <h2>Top Selling</h2>
      <div className="pd_container">
        {items.map((item) => (
          <Product key={item._id} item={item}></Product>
        ))}
      </div>
    </Container>
  );
};

export default Products;
