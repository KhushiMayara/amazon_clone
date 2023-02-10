import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>

        <div className="col">
          <h3>Connect with Us</h3>
          <p> Facebook</p>
          <p>Twitter</p>
          <p> Instagram</p>
        </div>

        <div className="col">
          <h3> Make Money with Us</h3>
          <p>
            Sell on Amazon Sell under Amazon Accelerator Protect and Build Your
            Brand Amazon Global Selling Become an Affiliate Fulfilment by Amazon
            Advertise Your Products Amazon Pay on Merchants Let Us Help You
            COVID-19 and Amazon Your Account Returns Centre 100% Purchase
            Protection Amazon App Download Amazon Assistant Download Help
          </p>
        </div>

        <div className="col">
          <h3>Let Us Help You </h3>
          <p>
            COVID-19 and Amazon Your Account Returns Centre 100% Purchase
            Protection Amazon App Download Amazon Assistant Download Help
          </p>
        </div>
      </div>
      <div className="footer_logo_container">
        <Link to="/">
          <img
            className="footer_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
