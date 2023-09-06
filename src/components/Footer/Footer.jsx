import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="Footer">
        <div className="social-link">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
        <div>
          <ul className="social-link text-white">
            <li>
              <a>About us : </a>
              <span>Fit Club related to body fit</span>
            </li>
            <li><a>Contact us :</a> 
              <span>8382049026</span>
              <span><b>Address</b> :  No 39/B, Godown, Plot, Vinayak Nagar, Gachibowli, Hyderabad, Telangana 500032</span>
            </li>

            <li>
              <a target="_blank" href="https://razorpay.com/privacy/">Privacy policy</a>
            </li>
            <li>
              <a target="_blank" href="https://razorpay.com/docs/payments/refunds/">Refund and Cancellations</a>
            </li>
            <li>
              <a target="_blank" href="https://razorpay.com/s/terms/customer/">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur footer-blur"></div>
    </div>
  );
};

export default Footer;
