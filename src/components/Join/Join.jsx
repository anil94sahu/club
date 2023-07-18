import React, { useRef } from "react";
import './Join.css';
import emailjs from '@emailjs/browser';
import Payment from "../Payment/Payment";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0wt0yrs', 'template_eqkrku8', form.current, '0EZmvfCTv0OXlB575')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="join" id="Join-us">
      <div className="left-j">
      <hr/>
        <div>
          <span className="stroke-text">Ready To </span>
          <span>Level Up</span>
        </div>
        <div>
          <span>Your Body </span>
          <span className="stroke-text">With Us</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
            <input type="email" name="email" placeholder="Enter your email"/>
            <Payment />
        </form>
      </div>
    </div>
  );
};

export default Join;
