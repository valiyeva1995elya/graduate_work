import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  function logOut() {
    localStorage.removeItem("saveUser");
    window.location.href = "/";
  }

  if (location.pathname === "/") {
    return (
      <div className="header">
        <a href="/">
          <img
            className="logo"
            src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/deba10a78e1c606c0b309b04b5bb8f27.jpg"
            alt=""
          />
        </a>

        <div>
          <a href="/register">
            <input className="btn" type="button" value={"Registration"} />
          </a>
          <a href="/login">
            <input className="btn" type="button" value={"Sing in"} />
          </a>
        </div>
      </div>
    );
  } else if (location.pathname === "/university") {
    return (
      <div className="header">
        <a href="/">
          <img
            className="logo"
            src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/deba10a78e1c606c0b309b04b5bb8f27.jpg"
            alt=""
          />
        </a>

        <div>
          <a href="/home">
            <input className="btn" type="button" value={"Home page"} />
          </a>
          <input
            onClick={logOut}
            className="btn"
            type="button"
            value={"Sing out"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <a href="/">
          <img
            className="logo"
            src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/deba10a78e1c606c0b309b04b5bb8f27.jpg"
            alt=""
          />
        </a>

        <div>
          <a href="/university">
            <input
              className="btn"
              type="button"
              value={"University"}
            />
          </a>
          <input
            onClick={logOut}
            className="btn"
            type="button"
            value={"Sing out"}
          />
        </div>
      </div>
    );
  }
}
