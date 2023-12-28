

// A signup and signin application
import React, { useRef, useEffect, useState } from "react";
import HoMe from "./hoMe";
import "./signup-signin.css";
import { useNavigate } from "react-router-dom";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";

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

  // defined functions and properties to get Oauth authentication working properly
  const [data, setData] = useState(null);
  const oauthName = localStorage.getItem("oauthName");
  const oauthEmail = localStorage.getItem("oauthEmail");
  const oauthSignup = localStorage.getItem("oauthSignUp");

  const emailRef = useRef();

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.value = oauthEmail;
    }
  }, []);

  const handleLoginSuccess = ({ provider, data }) => {
    if ((data.name, data.email)) {
      localStorage.setItem("oauthName", data.name);
      localStorage.setItem("oauthEmail", data.email);
      localStorage.setItem("oauthSignUp", data.email);

      console.log(data);
      console.log("Success", data.name);

      setData(data);
      // window.location.reload();
      window.location.href = "/";
      // setShowHome(true);
      alert(`Account created successfully`);
    }
  };

  const handleLoginSuccess3 = ({ provider, data }) => {
    if ((data.name, data.email)) {
      localStorage.setItem("oauthName", data.name);
      localStorage.setItem("oauthEmail", data.email);
      localStorage.setItem("oauthSignUp", data.email);

      console.log(data);
      console.log("Success", data.name);

      setData(data);
      window.location.href = "/";
      alert(`LoggedIn successfully`);
    }
  };

  const handleLoginSuccess2 = () => {
    if (emailRef.current.value === oauthEmail) {
      localStorage.setItem("oauthSignUp", emailRef.current.value);

      window.location.reload();
      window.location.href = "/";
      // setShowHome(true);
      alert(`LoggedIn successfully`);
    } else {
      alert("Please enter valid email account");
    }
  };

  const handleLoginFailure = (res) => {
    console.log("Failed", res);
  };

  useEffect(() => {
    if (localSignup || oauthSignup) {
      setShowHome(true);
    }
    if (localEmail || oauthEmail) {
      setShow(true);
    }
  }, [localSignup, oauthSignup, localEmail, oauthEmail]);
  // if oauthSignup is not there but oauthEmail and oauthName is available, perform the said function.
  if (!oauthSignup && oauthEmail && oauthName) {
    return (
      <div>
        <div id="Contact_Form">
          <div className="Contact-Form_container">
            <form className="contact_form">
              <div className="inputs">
                <div className="title">DNK</div>
                <p>
                  Hello!{" "}
                  <span>
                    {localName}
                    {oauthName}
                  </span>
                </p>
                <div>
                  <input type="text" placeholder="Email" ref={emailRef} />
                </div>
                <br />
                <button onClick={handleLoginSuccess2} type="submit">
                  Sign-In
                </button>
                <span id="or">Or</span>
                <LoginSocialGoogle
                  client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  // client_secret={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  discoveryDocs="claims_supported"
                  access_type=""
                  onResolve={handleLoginSuccess3}
                  onReject={({ error }) => {
                    console.log(error);
                    console.log("failed");
                  }}
                  onFailure={handleLoginFailure}
                >
                  <div className="buttons">
                    <GoogleLoginButton
                      className="butn"
                      iconSize="22.5px"
                      size="40px"
                    />
                  </div>
                </LoginSocialGoogle>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {showHome ? (
        <HoMe data={data} setData={setData} />
      ) : show ? (
        <div id="Contact_Form">
          <div className="Contact-Form_container">
            <form className="contact_form">
              <div className="inputs">
                <div className="title">DNK</div>
                <p>
                  Hello!{" "}
                  <span>
                    {localName}
                    {oauthName}
                  </span>
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
                <button onClick={handleSignup} type="submit">
                  Sign-Up
                </button>
                <span id="or">Or</span>
                <LoginSocialGoogle
                  client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  // client_secret={process.env.REACT_APP_GOOGLE_CLIENT_SECRET}
                  discoveryDocs="claims_supported"
                  access_type=""
                  onResolve={handleLoginSuccess}
                  onReject={({ error }) => {
                    console.log(error);
                    console.log("failed");
                  }}
                  onFailure={handleLoginFailure}
                >
                  <div className="buttons">
                    <GoogleLoginButton
                      className="butn"
                      iconSize="22.5px"
                      size="40px"
                    />
                  </div>
                </LoginSocialGoogle>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signin_signup;

// import React from 'react'
// import React, { useRef, useEffect, useState } from "react";
// import HoMe from "./hoMe";
// import "./signup-signin.css";
// import {
//   SignOutButton,
//   SignInButton,
//   SignedOut,
//   SignedIn,
//   useUser,
// } from "@clerk/clerk-react";

// function Signin_signup() {
//   return (
//     <div>
//       <SignedOut>
//         <div id="Contact_Form">
//           <div className="Contact-Form_container">
//             <div className="contact_form">
//               <div className="inputs">
//                 <div className="title">DNK</div>
//                 <p>Please create an account / signin to access our services!</p>                
//                 <SignInButton afterSignInUrl="/">Proceed...</SignInButton>
//               </div>
//             </div>
//           </div>
//         </div>
//       </SignedOut>
//       <SignedIn>
//         <HoMe/>
//       </SignedIn>
//     </div>
//   );
// }

// export default Signin_signup;