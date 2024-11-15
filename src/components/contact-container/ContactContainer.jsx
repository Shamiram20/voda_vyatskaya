import React from 'react';
import './ContactContainer.css';

function ContactContainer() {
  return (
    <div className="contact-container">
      <a href="" className="contact" target="_blank">
        +7 (8334) 3-83-66 <img src='images/Telephone.png' alt="Tel" className='img' />
      </a>
      <a href="" className="contact" target="_blank">
        +7 (953) 696-83-66 <img src='images/WhatsApp.png' alt="Watsapp" className='img' />
      </a>
      <a href="" className="contact">
        @vodaviatskaia <img src='images/Instagram.png' alt="Insta" className='img' />
      </a>
    </div>
  );
}

export default ContactContainer;
