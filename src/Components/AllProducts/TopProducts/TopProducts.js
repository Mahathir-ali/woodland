import { Container, Rating, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TopProducts = ({ items }) => {
  const { name, img, price, _id, rating } = items;

  return (
    <div>
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
    </div>
  );
};

export default TopProducts;
