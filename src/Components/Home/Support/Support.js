import React from "react";
import "./support.css";
import { Container } from "react-bootstrap";
import { IoRocketSharp } from "react-icons/io5";
import { FcRefresh } from "react-icons/fc";
import { RiErrorWarningLine } from "react-icons/ri";
import { GrSupport } from "react-icons/gr";
const Support = () => {
  return (
    <div>
      <Container className="support">
        <div>
          <div className="support_type">
            <IoRocketSharp className="icon" />{" "}
            <div>
              <h6>Free Shipping</h6>
              <small>orders $50 or more</small>
            </div>
          </div>
        </div>
        <div className="support_type">
          <div>
            <FcRefresh className="icon" />
          </div>
          <div>
            <h6>Free Returns</h6>
            <small>within 30 days</small>
          </div>
        </div>
        <div>
          <div className="support_type">
            <RiErrorWarningLine className="icon" />
            <div>
              <h6> Get 20% Off 1 item</h6>
              <small>When you sign up</small>
            </div>
          </div>
        </div>
        <div className="support_type">
          <div>
            <GrSupport className="icon" />
          </div>
          <div>
            <h6>We Support</h6>
            <small>24/7 amazing services</small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Support;
