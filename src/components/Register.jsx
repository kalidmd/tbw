import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/register.css'
export default function Register () {
  const [isMessageSent, setIsMessageSent] = useState(false);
  // const [count, setCount] = useState(0); 
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    setIsMessageSent(true)
    
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  useEffect(() => { 
      //Implementing the setInterval method 
      const interval = setInterval(() => { 
          setIsMessageSent(false) 
      }, 3000); 

      //Clearing the interval 
      return () => clearInterval(interval); 
  }, [isMessageSent]); 

  console.log(isMessageSent);
  return (
    <div>
      <form id="reg-form" className="reg-form" ref={form} onSubmit={sendEmail}>
        <p className="form-title">Register Here!</p>
        <label>Name</label>
        <input 
          type="text" 
          name="user_name" 
          placeholder="Please Enter Your Name"
        />
        <label>Email</label>
        <input 
          type="email" 
          name="user_email" 
          placeholder="Please Enter Your Email"
        />
        <label>Message</label>
        <textarea 
          name="message" 
          placeholder="Leave Us a Message."
        />
        <input 
          className="send-btn" 
          type="submit" 
          value="Send"  
        />
      </form>
      {isMessageSent && <p className="sent-message">You've Been Registered Succssefully 🎉</p>} 
    </div>
  );
};