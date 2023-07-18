import React, { useEffect } from 'react';
import './Payment.css';
import QrCode from '../../assets/QrCode.jpeg'

const Payment = () => {
    const options = {
        key: "rzp_test_pxAFm6zNihjVV1",
        amount: "10000", //  = INR 1
        name: "Fit Club",
        description: "some description",
        image: QrCode,
        handler: function(response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Fit Club",
          contact: "8382049026",
          email: "anil94sahu@gmail.com"
        },
        notes: {
          address: "https://anil94sahu.github.io/club/"
        },
        theme: {
          color: "#F37254",
          hide_topbar: false
        }
      };
    
      const openPayModal = options => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      };
      useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
      }, []);
  return (
    <div>
        <button onClick={() => openPayModal(options)} className="btn btn-j">Join Now</button>
    </div>
  )
}

export default Payment