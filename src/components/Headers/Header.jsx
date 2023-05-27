import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Bar from "../../assets/bars.png";
import { Link } from "react-scroll";
import "./Header.css";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile == true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bar} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li >
            <Link onClick={() => setMenuOpened(false)} span={true} smooth={true} to="header">
              Home
            </Link>
          </li>
          <li >
            <Link onClick={() => setMenuOpened(false)} span={true} smooth={true} to="programs">
              Programs
            </Link>
          </li>
          <li >
            <Link onClick={() => setMenuOpened(false)} span={true} smooth={true} to="reasons">
              Why us
            </Link>
          </li>
          <li >
            <Link onClick={() => setMenuOpened(false)} span={true} smooth={true} to="plans">
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
              
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
