import React, { useState } from "react";

function Contact() {
  return (
    <div id="Contact">
      <h1>
        CONTACT <span>ME</span>
      </h1>
      <div className="contact_container">
        <h2>want to collaborate? send me an e-mail</h2>
        <h4>I am very responsive to messages</h4>
        <div className="contact_content">
          <a href="mailto:ejeanobionyeka@gmail.com">
            <button id="submit">Write a Mail</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
