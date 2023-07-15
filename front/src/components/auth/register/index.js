import React from "react";
import { TextField, Button, Typography } from "@mui/material";

export default function RegisterPage(props) {
  const { setPassword, setEmail, setName, setSurname, setAge } = props;


  return (
    <>
      <Typography
        variant="h2"
        textAlign="center"
        fontFamily="Amatic SC , cursive"
        fontWeight={700}
      >
        Регистрация
      </Typography>
      <Typography
        variant="body1"
        marginBottom={2}
        textAlign="center"
        fontFamily="Amatic SC , cursive"
        fontWeight={700}
        fontSize={20}
      >
        Введите Ваши данные для регистрации аккаунта
      </Typography>
      <TextField
        fullWidth={true}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите Ваше имя"
      />
      <TextField
        fullWidth={true}
        fontFamily="Amatic SC , cursive"
        onChange={(e) => setSurname(e.target.value)}
        margin="normal"
        label="Фамилия"
        variant="outlined"
        placeholder="Введите Вашу фамилию"
      />
      <TextField
        fullWidth={true}
        fontFamily="Amatic SC , cursive"
        onChange={(e) => setAge(e.target.value)}
        margin="normal"
        label="Возраст"
        variant="outlined"
        placeholder="Введите Ваш возраст"
      />
      <TextField
        fullWidth={true}
        fontFamily="Amatic SC , cursive"
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        label="Логин"
        variant="outlined"
        placeholder="Введите Ваш логин"
      />
      <TextField
        type="password"
        fontFamily="Amatic SC , cursive"
        onChange={(e) => setPassword(e.target.value)}
        fullWidth={true}
        margin="normal"
        label="Пароль"
        variant="outlined"
        placeholder="Введите Ваш пароль"
      />
      <Button
        type="submit"
        sx={{
          fontFamily:"Amatic SC , cursive",
          marginTop: 2,
          marginBottom: 2,
          height: "60px",
          width: "100%",
          backgroundColor: "#bdbdbd",
          fontSize: "25px",
          fontWeight:"700",
        }}
        variant="contained"
        color="inherit"
      >
        Регистрация
      </Button>
      <Typography
        sx={{
          fontFamily: "Amatic SC , cursive",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        У Вас уже есть аккаунт?
        <a href="/login" className="incitingText">
          Авторизация
        </a>
      </Typography>
      <Typography
        sx={{
          fontFamily: "Amatic SC , cursive",
          fontWeight: "700",
          fontSize: "25px",
        }}
      >
        <a href="/" className="incitingText">
          Главная страница
        </a>
      </Typography>
    </>
  );
}
