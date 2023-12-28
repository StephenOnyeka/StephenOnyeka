import React from "react";
import NVBar from "../navbar/NVBar";
// import {
//   SignOutButton,
//   SignInButton,
//   SignedOut,
//   SignedIn,
//   useUser,
// } from "@clerk/clerk-react";

function User({ data, setData }) {
  const localName = localStorage.getItem("name");
  const oauthName = localStorage.getItem("oauthName");
  const oauthSignup = localStorage.getItem("oauthSignUp");

  
  const logout = () => {
    localStorage.removeItem("signUp");
    localStorage.removeItem("oauthSignUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    setData(null);
    window.location.reload();
  };
  // const { user } = useUser();
  return (
    <div id="User">
      <NVBar />
      <div id="user_container">
        <h2>
          Welcome (<i>{localName}{oauthName}</i>)!
        </h2>
        <h3>
          <i>Hope you are enjoying your time with us!</i>
        </h3>
        <div className="buttons">
          <button onClick={logout} className="logout">
            LogOut
          </button>
          <button onClick={deleteAccount} className="delete">
            Delete Acc.
          </button>
          {/* <SignOutButton></SignOutButton> */}
        </div>
      </div>
    </div>
  );
}

export default User;
