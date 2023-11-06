import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l1l7moi",
        "template_6vfb35s",
        form.current,
        "n3uRmdTis5TmYoEoO50ss"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form
        id="contactform"
        action="https://formsubmit.co/send/ejeanobionyeka@gmail.com"
        method="POST"
      >
        <label>Name</label>
        <input type="text" name="name" required/>
        <label>Email</label>
        <input type="email" name="email" required/>
        <label>Message</label>
        <textarea name="message" id="comment" rows="3" />

        {/* <input type="text" name="_formsubmit_id" style="display:none" /> */}

        <input type="submit" value="Send" />
      </form>
      {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
    </>
  );
};
