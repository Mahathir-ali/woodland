import React from "react";
import "./discount.css";
import { Card } from "react-bootstrap";
import deal1 from "../../../Images/new item/abimg-1.png";
import deal2 from "../../../Images/new item/2-2.jpg";
const Discount = () => {
  return (
    <div>
      <div className="deal-bg">
        <div className="deal_container">
          <div>
            <div>
              <Card className="bg-dark text-white deal_card chair-card">
                <Card.Img
                  className="deal-img chair-img"
                  src={deal1}
                  alt="Card image"
                />
                <Card.ImgOverlay className="chair_text">
                  <Card.Title>
                    <h2>
                      Offers Going On <br />
                      Grab Your Deal Now.
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <button>SHOP NOW</button>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
          <div>
            <Card className="bg-dark text-white deal_card bedCover-card ">
              <Card.Img className="deal-img" src={deal2} alt="Card image" />
              <Card.ImgOverlay className="bed_sheet">
                <Card.Title>
                  <h3>
                    {" "}
                    Indigo <br />
                    Bed Line
                  </h3>
                </Card.Title>
                <Card.Text className="bed_text">from $179.99</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
