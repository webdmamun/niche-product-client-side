import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center banner">
      <div>
        <h1>Guitar Point</h1>
        <h5 className="mt-3"> Music is the universal language of mankind</h5>
        <Link to="/allProducts">
          <button className="btn btn-secondary mt-3">Explore &#8594; </button>
        </Link>
      </div>
      <div>
        <img
          className="w-80 m-5 rounded"
          src="https://cdn.shopify.com/s/files/1/0436/6696/4634/files/Girl-image-420X612_1920X.jpg?v=1595593376"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
