import React, { useEffect, useState } from "react";
import "./details.css";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { Alert } from "@mui/material";
import useAuth from "../hooks/useAuth";
import Rating from "react-rating";
import Navigation from "../Shared/Navigation/Navigation";
const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [order, setOrder] = useState(false);
  const { user } = useAuth();
  const onSubmit = (data) => {
    data.status = "Pending";
    console.log(data);
    fetch("https://mighty-chamber-62997.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setOrder(true);
          reset();
        }
      });
  };

  useEffect(() => {
    fetch(`https://mighty-chamber-62997.herokuapp.com/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  return (
    <>
      <Navigation />
      <Container className="mt-5 mb-5">
        <div className="details_container">
          <div className="details_img">
            <img src={details.img} alt="" />
          </div>
          <div className="details-box">
            <h2>{details.name}</h2>
            <hr />
            <p className="descip">{details.description}</p>
            <Rating
              className="details_rating"
              initialRating={details.rating}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              readonly
            ></Rating>
            <h5 className="descip">$ {details.price}</h5>
            <br />
          </div>
        </div>
        <section className="mt-5">
          <h1>Provide Information For Buy this Product</h1>
          {order && (
            <Alert severity="success">
              Order Placed Successfully.<i className="far fa-smile-beam"></i>{" "}
            </Alert>
          )}
          <form className="form-body" onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={details.name}
              {...register("name")}
              className="p-2 m-2 w-50 input-field"
            />
            <input
              defaultValue={details.description}
              {...register("description")}
              className="p-2 m-2 w-50 input-field"
            />
            <input
              defaultValue={details.img}
              {...register("img")}
              className="p-2 m-2 w-50 input-field"
            />
            <input
              defaultValue={details.price}
              {...register("number")}
              className="p-2 m-2 w-50 input-field"
            />
            <input
              defaultValue={user?.email}
              {...register("email")}
              className="p-2 m-2 w-50 input-field"
            />
            <input
              {...register("address")}
              placeholder="Address"
              className="p-2 m-2 w-50 input-field"
            />
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="p-2 m-2 w-50 input-field"
            />
            <br />

            {/* <input className="submit-btn" type="submit" /> */}
            <div>
              <button type="submit" className="buy-btn">
                <RiShoppingCart2Line /> Buy Now
              </button>
            </div>
          </form>
        </section>
      </Container>
    </>
  );
};

export default Details;
