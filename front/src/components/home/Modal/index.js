import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./style.css";

export default function Modal({ active, setActive }) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [age, setAge] = useState();

  function saveNewData() {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = JSON.parse(localStorage.getItem("user"));
    const BASE_URL = "http://localhost:8080";

   
    if (name === undefined) {
      user.name = user.name;
    } else {
      user.name = name;
    }
    if (surname === undefined) {
      user.surname = user.surname;
    } else {
      user.surname = surname;
    }

    if (age === undefined) {
      user.age = user.age;
    } else {
      user.age = age;
    }

    for (let i = 0; i < users.length; i++) {
      if (user.email === users[i].email) {
        users[i].name = user.name;
        users[i].surname = user.surname;
        users[i].age = user.age;
      }
    }
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(users));

    fetch(BASE_URL + `/accounts/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    setActive(false);
  }

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <TextField
          fullWidth={true}
          margin="normal"
          label="Имя"
          variant="outlined"
          placeholder="Введите Имя"
          fontFamily="Amatic SC"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth={true}
          margin="normal"
          label="Фамилия"
          variant="outlined"
          placeholder="Введите Фамилию"
          fontFamily="Amatic SC"
          onChange={(e) => setSurname(e.target.value)}
        />
        <TextField
          fullWidth={true}
          type="number"
          margin="normal"
          label="Возраст"
          variant="outlined"
          placeholder="Введите Возраст"
          fontFamily="Amatic SC"
          onChange={(e) => setAge(e.target.value)}
        />
        <div className="block-btn">
          <Button
            onClick={() => saveNewData()}
            type="submit"
            sx={{
              fontFamily: "Amatic SC , cursive",
              marginTop: 2,
              marginBottom: 2,
              height: "60px",
              width: "60%",
              backgroundColor: "#bdbdbd",
              fontWeight: "700",
              fontSize: "20px",
            }}
            variant="contained"
            color="inherit"
          >
            Сохранить данные
          </Button>
          <Button
            onClick={() => setActive(false)}
            type="submit"
            sx={{
              fontFamily: "Amatic SC , cursive",
              marginTop: 2,
              marginBottom: 2,
              height: "60px",
              width: "30%",
              backgroundColor: "#bdbdbd",
              fontWeight: "700",
              fontSize: "20px",
            }}
            variant="contained"
            color="inherit"
          >
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
}
