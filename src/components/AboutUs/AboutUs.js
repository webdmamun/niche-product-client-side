import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container d-flex flex-wrap justify-content-around align-items-center banner pt-4 pb-4">
        <div>
          <img
            className="img-fluid mb-3"
            style={{
              padding: "5px",
              margin: "5px",
              borderRadius: "5px",
              boxShadow: "0 0 8px 0 grey",
              width: "500px",
            }}
            src="https://www.mi.edu/wp-content/uploads/2018/12/Guitar-History-How-the-Guitar-has-Evolved.jpg"
            alt=""
          />
        </div>
        <div>
          <h2>About Us</h2>
          <h5 className="mt-3">
            {" "}
            A guitar is more than just a sound box... <br /> it is part of your
            soul.
          </h5>
          <Link to="/about">
            <button className="btn btn-secondary mt-4">More &#8594;</button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
