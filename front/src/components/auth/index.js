import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import LoginPage from "./login";
import RegisterPage from "./register";
import "./style.css";


export default function AuthRootComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [surname, setSurname] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const BASE_URL = "http://localhost:8080";

  const getUsers = () =>{
    fetch(BASE_URL + "/accounts")
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("users", JSON.stringify(result));
        })
        .catch(() => console.log("err"));
      }
      const users = JSON.parse(localStorage.getItem("users"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (location.pathname === "/register") {
      const payload = {
        email,
        password,
        name,
        surname,
        age,
      };
      if (checkDate(payload)) {
        fetch(BASE_URL + "/accounts", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify(payload),
        })
          .then(() => navigate("/login"))
          .catch(() => alert("err"));
      } else {
        console.log("err");
      }
    } else if (location.pathname === "/login") {

      for (let i = 0; i <= users.length - 1; i++) {
        if (!validateEmail(email)) {
          alert("Incorrect email!");
          break;
        } else if (email === users[i].email && password === users[i].password) {
          localStorage.setItem("user", JSON.stringify(users[i]));

          navigate("/home");
        }
      }
    }

  };
  function checkDate(payload) {
    if (!validateEmail(payload.email)) {
      alert("Некорректно указан логин!");
      return false;
    }
    if (!validatePassword(payload.password)) {
      alert("Пароль должен содержать не менее 8-ми символов, в том числе цифры, спецсимволы (/$!*), прописаные и строчные буквы!");
      return false;
    }
    if (!validateAge(payload.age)) {
      alert("Некорректно указан Ваш возраст!");
      return false;
    } else if (
      payload.name.length < 1 ||
      payload.surname.length < 1 ||
      payload.password.length < 1 ||
      payload.age.length < 1 ||
      payload.email.length < 1
    ) {
      alert("Вам необходимо заполнить все поля!");
      return false;
    } else {
      return true;
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePassword = (password) => {
    return String(password).match(
      /^\S*(?=.*[A-Z])(?=.*[0-9])(?=.*[/$!*])[a-zA-Z0-9*/$!]{8,}\S*$/g
    );
  };
  const validateAge = (age) => {
    return String(age).match(/^[1-9][0-9]$|^[1-9]$|^100$/);
  };

  useEffect(() => {
    getUsers();
  });


  return (
    <div className="root">
   
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          marginTop={5}
          
        >
          {location.pathname === "/login" ? (
            <LoginPage setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              setEmail={setEmail}
              setPassword={setPassword}
              setName={setName}
              setSurname={setSurname}
              setAge={setAge}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
}
