import React from "react";
import NVBar from "../navbar/NVBar";

function User() {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };
  const localName= localStorage.getItem("name");
  return (
    <div id="User">
      <NVBar />
      <div id="user_container">
        <h2>
          Welcome (<i>{localName}</i>)!
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
        </div>
      </div>
    </div>
  );
}

export default User;
