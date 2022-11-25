import React, { useRef } from 'react';
import  { urlFor, client } from "../../client";
import { useState, useEffect } from "react";
import "./contacts.sass";
import{AiOutlineMail , AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com'


const Contacts = () => {
  
  const phone = "9361387478"
  const email= ""

  return (
    <div className="contacts" id="contacts">
      <p className="cen1">Get In Touch</p>
      <h2 className="cen">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <AiOutlineWhatsApp/>
              <h4>WhatsApp</h4>
              <a href={"https://api.whatsapp.com/send?phone=%2B91"+phone} target="_blank" className="btn btn-outline-primary btn3">Click to Contact us</a>
              
          </article>
        </div>


      </div>

    </div>
  );
};

export default Contacts;
