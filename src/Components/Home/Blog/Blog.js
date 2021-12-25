import React from "react";
import "./blog.css";
import { Container } from "react-bootstrap";
import blog1 from "../../../Images/blog/1_f0567bb386.jpg";
import blog2 from "../../../Images/blog/2_92f65a3fd1.jpg";
import blog3 from "../../../Images/blog/3_333b7bf5f7.jpg";

const Blog = () => {
  return (
    <Container className="mt-5">
      <h1 className="blog-title">From Our Blog</h1>
      <div className="blog_container">
        <div>
          <div>
            <img src={blog1} alt="" />
          </div>
          <div className="blog_details">
            <p>May 12, 2020</p>
            <h5>Sed adipising odrnare</h5>
            <button>Continue Reading</button>
          </div>
        </div>
        <div>
          <div>
            <img src={blog2} alt="" />
          </div>
          <div className="blog_details">
            <p>May 12, 2020</p>
            <h5>Sed adipising odrnare</h5>
            <button>Continue Reading</button>
          </div>
        </div>
        <div>
          <div>
            <img src={blog3} alt="" />
          </div>
          <div className="blog_details">
            <p>May 12, 2020</p>
            <h5>Sed adipising odrnare</h5>
            <button>Continue Reading</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
