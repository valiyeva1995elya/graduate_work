import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="logo">
          <img
            className="logo-img"
            src="https://cdn.dribbble.com/users/230290/screenshots/15128882/media/deba10a78e1c606c0b309b04b5bb8f27.jpg"
          />
          <p className="logo-text">
            © 1995-2023 Reverso Technologies Inc. <br /> Все права защищены.
          </p>
        </div>
        <div>
          <p>
            Call-центр<br />
            <b>+7 (727) 777-27-27</b> <br />
            <b>+7 (727) 777-28-28</b>
          </p>
        </div>
        <div>
          <p>
            <b>
              {" "}
              проспект Мангилик Ел 10, <br />
              Астана, Казахстан, 010000
              <br />
              university@edu.com
              <br />
              +7 (727) 777-77-77
            </b>
          </p>
        </div>
      </footer>
    </>
  );
}
