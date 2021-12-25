import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./product.css";
const Product = ({ item }) => {
  const { name, img, price, _id, rating } = item;
  return (
    <Container>
      <Link to={`/details/${_id}`}>
        <div className="pd_card">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="pd_card-details">
            <h6>{name}</h6>
            <Stack className="rate" spacing={1}>
              <Rating
                className="rating"
                name="half-rating"
                defaultValue={parseFloat(rating)}
                size="small"
                readOnly
              />
            </Stack>
            <p>$ {price}</p>
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default Product;
