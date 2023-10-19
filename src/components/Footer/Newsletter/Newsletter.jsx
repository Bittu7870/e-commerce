import React from "react";
import "./Newsletter.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">NEWSLETTER</span>
        <span className="big-text">SIGN UP LATEST UPDATES AND OFFERS </span>
        <div className="form">
          <input type="text" placeholder="Enter Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be use in according with our Privacy Policy
        </div>
        <div className="social-icon">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
