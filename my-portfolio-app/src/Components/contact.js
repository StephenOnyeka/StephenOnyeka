import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact() {
  // const [state, setState] = useState(true);
  // const display = function () {
  //   {
  //     state ? alert(`Not submitted, Error!`) : alert(`Submitted successfully`);
  //   }
  // };
  // const form = useRef();

  // const { register, reset, errors, handleSubmit } = useForm();
  // const registerHandler = () => {
  //   reset();
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_6geem04",
  //       "template_6vfb35s",
  //       form.current,
  //       "BJ-zlqPmDFC_kHWXP"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div id="Contact">
      <div className="contact_container">
        <h2> SEND ME AN E-MAIL</h2>
        <h4> I AM VERY RESPONSIVE TO MESSAGES</h4>
        <form
          id="contactform"
          action="https://formsubmit.io/send/8f9c9628-578e-4ed6-a002-1a5eabc67917"
          method="POST"

          // className={state? alert('Not submitted, check your internet connection') : alert('Submitted successfully')}
          //  ref={form}
          // onSubmit={sendEmail, display}
          // onClick={() => { setState(!state); handleSubmit(registerHandler)} }
        >
          <div className="contact_content">
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
              required
            />
            <textarea
              type="message"
              placeholder="Message"
              name="message"
              required
            />

            <button type="submit" id="submit">
              Send Message
            </button>
          </div>
        </form>
        {/* <form
          // className={state? error('Not submitted, check your internet connection') : alert('Submitted successfully')}
           ref={form}
          onSubmit={sendEmail, display} 
          onClick={() => { setState(!state); handleSubmit(registerHandler)} }
        >
          <div className="contact_content">
            <input
              
              type="text"
              placeholder="Name"
              name="from_name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="from_email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              required
            />
            <textarea
              type="message"
              placeholder="Message"
              name="message"
              required
            />

            <button type="submit" id="submit">
              Send Message
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
