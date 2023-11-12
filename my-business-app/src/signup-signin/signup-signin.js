// A signup and signin application
import React, { useRef, useEffect, useState } from "react";
import HoMe from "./hoMe";
import "./signup-signin.css";
import { useNavigate } from "react-router-dom";

function Signin_signup() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignup = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");
  const navigate = useNavigate();

  useEffect(() => {
    if (localSignup) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });
  const handleSignup = () => {
    if ((name.current.value, email.current.value, password.current.value)) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert(`Account created successfully!`);
      window.location.reload();
      navigate("/");
    }
  };
  const handleSignin = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
      navigate("/");
    } else {
      alert("Please enter valid credential");
    }
  };

  return (
    <div>
      {showHome ? (
        <HoMe/>
      ) : show ? (
        <div id="Contact_Form">
          <div className="Contact-Form_container">
            <form className="contact_form">
              <div className="inputs">
                <div className="title">DNK</div>
                <p>
                  Hello! <span>{localName}</span>
                </p>
                <div>
                  <input type="text" placeholder="Email" ref={email} />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    ref={password}
                  />
                </div>
                <br />
                <button onClick={handleSignin} type="submit">
                  {" "}
                  Sign-In
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div id="Contact_Form">
          <div className="Contact-Form_container">
            <form className="contact_form">
              <div className="inputs">
                <div className="title">DNK</div>
                <p>Please create an account to access our services!</p>
                <div>
                  <input type="text" placeholder="Username" ref={name} />
                </div>
                <div>
                  <input type="text" placeholder="Email" ref={email} />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    ref={password}
                  />
                </div>

                <br />
                <button onClick={handleSignup} type="submit">
                  {" "}
                  Sign-Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signin_signup;
