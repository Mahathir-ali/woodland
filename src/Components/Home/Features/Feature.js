import React from "react";
import { Card, Container } from "react-bootstrap";
import feature1 from "../../../Images/new item/1-1.jpg";
import feature2 from "../../../Images/new item/1-2.jpg";
import feature3 from "../../../Images/new item/1-3.jpg";
import feature4 from "../../../Images/new item/1-4.jpg";
import "./feature.css";
const Features = () => {
  return (
    <Container className="mt-5">
      <Container className="mt-5">
        <div className="feature-container">
          <div>
            <Card className="bg-dark text-white feature_card feature-car2">
              <Card.Img
                className="feature_car-img"
                src={feature1}
                alt="Card image"
              />
              <Card.ImgOverlay className="feature_text">
                <Card.Title>Coffee Table</Card.Title>
                <Card.Text>from $19.99</Card.Text>
                {/* <Card.Text>Get it</Card.Text> */}
              </Card.ImgOverlay>
            </Card>
          </div>
          <div>
            <Card className="bg-dark text-white feature_card feature-car2">
              <Card.Img
                className="feature_card-img"
                src={feature2}
                alt="Card image"
              />
              <Card.ImgOverlay className="feature_text">
                <Card.Title>Kitchenware</Card.Title>
                <Card.Text>from $32.00</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div>
            <div>
              <Card className="bg-dark text-white feature_card">
                <Card.Img src={feature3} alt="Card image" />
                <Card.ImgOverlay className="feature_text">
                  <Card.Title>Home Decor</Card.Title>
                  <Card.Text>up to 30% off</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div>
              <Card className="bg-dark text-white feature_card mt-3">
                <Card.Img src={feature4} alt="Card image" />
                <Card.ImgOverlay className="feature_text">
                  <Card.Title>Collection Chairs</Card.Title>
                  <Card.Text>from $39.00</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Features;
