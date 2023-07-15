import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/deba10a78e1c606c0b309b04b5bb8f27.jpg"
          alt=""
        />
      </Link>
      {location.pathname === "/" ? (
        
        <div>
          <Link to="/register">
            <input className="btn" type="button" value={"Регистрация"} />
          </Link>
          <Link to="/login">
            <input className="btn" type="button" value={"Войти"} />
          </Link>
        </div>
      ) : location.pathname === "/university" ? (
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
    
      ) : location.pathname === "/home" ? (
        <div>
          
          <Link to="/university">
            <input className="btn" type="button" value={"Университеты"} />
          </Link>
          <input
            onClick={logOut}
            className="btn"
            type="button"
            value={"Выйти"}
          />
        </div>
      ) : (
        <div>
          <Link to="/university">
            <input className="btn" type="button" value={"Университеты"} />
          </Link>
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
      )}
    </div>
  );
}
