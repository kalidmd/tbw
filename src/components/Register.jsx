import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/register.css'

export default function Register () {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [user_name, setUser_name] = useState(""); 
  const [user_email, setUser_email] = useState("");
  const [message, setMessage] = useState(""); 
  const form = useRef();

  const handleNameChange = (event) => {
    setUser_name(event.target.value) 
  }
  const handleEmailChange = (event) => {
    setUser_email(event.target.value)
  }
  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    setIsMessageSent(true)
    
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
   ;

    setUser_name("")
    setUser_email("")
    setMessage("")
  };
  
  useEffect(() => { 
      //Implementing the setInterval method 
      const interval = setInterval(() => { 
          setIsMessageSent(false) 
      }, 5000); 

      //Clearing the interval 
      return () => clearInterval(interval); 
  }, [isMessageSent]); 

  return (
    <div>
      <form id="reg-form" className="reg-form" ref={form} onSubmit={sendEmail}>
        <p className="form-title">Register Here For Free!</p>
        <label>Name <span className="required">*</span></label>
        <input 
          type="text" 
          name="user_name" 
          placeholder="Enter Your Full Name"
          required
          value={user_name}
          onChange={handleNameChange}
        />

        <label>Email <span className="required">*</span> </label>
        <input 
          type="email" 
          name="user_email" 
          placeholder="Enter Your Email"
          required
          value={user_email}
          onChange={handleEmailChange}
        />

        <label>Message (optional)</label>
        <textarea 
          name="message"
          value={message}
          onChange={handleMessageChange} 
          placeholder="Leave Us a Message."
        />

        <input 
          className={isMessageSent ? "sent-btn" : "send-btn"} 
          type="submit" 
          value={isMessageSent ? "Message Sent" : "Send"}  
        />
      </form>
    </div>
  );
};