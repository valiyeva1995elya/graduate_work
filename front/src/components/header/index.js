import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Header() {
  const location = useLocation();
  function logOut() {
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  if (location.pathname === "/") {
    return (
      <div className="header">
        <Link to="/">
          <img
            className="logo"
            src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/deba10a78e1c606c0b309b04b5bb8f27.jpg"
            alt=""
          />
        </Link>

        <div>
          <Link to="/register">
            <input className="btn" type="button" value={"Регистрация"} />
          </Link>
          <Link to="/login">
            <input className="btn" type="button" value={"Войти"} />
          </Link>
        </div>
      </div>
    );
  } else if (location.pathname === "/university") {
    return (
      <div className="header">
        <Link to="/">
          <img
            className="logo"
            src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/deba10a78e1c606c0b309b04b5bb8f27.jpg"
            alt=""
          />
        </Link>

        <div>
          <Link to="/home">
            <input className="btn" type="button" value={"Профиль"} />
          </Link>
          <input
            onClick={logOut}
            className="btn"
            type="button"
            value={"Выйти"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <Link to="/">
          <img
            className="logo"
            src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/deba10a78e1c606c0b309b04b5bb8f27.jpg"
            alt=""
          />
        </Link>

        <div>
          <Link to="/university">
            <input
              className="btn"
              type="button"
              value={"Университеты"}
            />
          </Link>
          <input
            onClick={logOut}
            className="btn"
            type="button"
            value={"Выйти"}
          />
        </div>
      </div>
    );
  }
}
