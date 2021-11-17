import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer">
        <div>
          <h4>
            <u>Company</u>
          </h4>
          <h6>About Us</h6>
          <h6>Blog</h6>
          <h6>Contact</h6>
        </div>

        <div>
          <h4>
            <u>Best Seller</u>
          </h4>
          <h6>Catalog</h6>
          <h6>Our Stores</h6>
          <h6>Notice</h6>
        </div>
        <div>
          <h2>Guitar Point</h2>
          <h5>
            A guitar is more than just a sound box... <br /> it is part of your
            soul.
          </h5>
          <div className="d-flex justify-content-center">
            <a href="/#" target="_blank">
              <i className="fab fa-facebook-square footer-icon"></i>
            </a>
            <a href="/#" target="_blank">
              <i className="fab fa-twitter-square footer-icon"></i>
            </a>
            <a href="/#" target="_blank">
              <i className="fab fa-instagram footer-icon"></i>
            </a>
            <a href="/#" target="_blank">
              <i className="fab fa-linkedin footer-icon"></i>
            </a>
          </div>
        </div>
      </div>
      <h6>&copy; Copyright Reserved</h6>
    </div>
  );
};

export default Footer;
