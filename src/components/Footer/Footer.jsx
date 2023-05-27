import React from "react";
import "./Footer.css";
import Logo from '../../assets/logo.png';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
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
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
      </div>
      <div className="blur footer-blur"></div>
    </div>
  );
};

export default Footer;
