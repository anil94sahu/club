import React from "react";
import "./Hero.css";
import Header from "./Headers/Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header></Header>
        <div className="the-best-ad">
          <motion.div
            transition={{ ...transition, type: "tween" }}
            initial={mobile ? { left: "138px" } : { left: "238px" }}
            whileInView={{ left: "8px" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape</span>
            <span> your</span>
          </div>
          <div>
            <span>ideal</span>
            <span> body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live uo your life to fullest
            </span>
          </div>
        </div>
        {/* Hero figuring */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter
                start={0}
                end={140}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter
                start={0}
                end={978}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter
                start={0}
                end={50}
                delay="4"
                preFix="+"
              ></NumberCounter>
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          transition={{ ...transition }}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart</span>
          <span>116pm</span>
        </motion.div>
        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>calories Burned</span>
            <span>200 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
