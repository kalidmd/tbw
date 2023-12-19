import React, { useState, useRef } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import '../styles/register.css'

export default function Register () {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [user_name, setUser_name] = useState(""); 
  const [user_email, setUser_email] = useState("");
  const [message, setMessage] = useState(""); 
  const form = useRef();
  const { t } = useTranslation();

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

  if(isMessageSent === true) {
    alert("Registered Successfully 🎉, Check Out Your Email")
    setIsMessageSent(false)
  }

  return (
    <div>
      <form id="reg-form" className="reg-form" ref={form} onSubmit={sendEmail}>
        <p className="form-title"> {t('register_here')} </p>
        <label> {t('reg_name')} <span className="required">*</span></label>
        <input 
          type="text" 
          name="user_name" 
          placeholder={t('reg_name_placeholder')}
          required
          value={user_name}
          onChange={handleNameChange}
        />

        <label> {t('reg_email')} <span className="required">*</span> </label>
        <input 
          type="email" 
          name="user_email" 
          placeholder={t('reg_email_placeholder')}
          required
          value={user_email}
          onChange={handleEmailChange}
        />

        <label> {t('reg_message')} </label>
        <textarea 
          name="message"
          value={message}
          onChange={handleMessageChange} 
          placeholder={t('reg_message_placeholder')}
        />

        <input 
          className={isMessageSent ? "sent-btn" : "send-btn"} 
          type="submit"  
          value={"Send"}  
        />
      </form>
    </div>
  );
};