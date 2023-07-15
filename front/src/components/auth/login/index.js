import { TextField, Button, Typography } from "@mui/material";
import React from "react";

export default function LoginPage(props) {
  const { setPassword, setEmail } = props;

  return (
    <>
      <Typography
        variant="h2"
        textAlign="center"
        fontFamily="Amatic SC , cursive"
        fontWeight={700}
      >
        Войти в аккаунт
      </Typography>
      <Typography
        variant="body1"
        marginBottom={3}
        textAlign="center"
        fontFamily="Amatic SC , cursive"
        fontWeight={700}
        fontSize={20}
      >
        Введите Ваш логин и пароль
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="Логин"
        variant="outlined"
        placeholder="Введите Ваш логин"
        fontFamily="Amatic SC"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Пароль"
        variant="outlined"
        placeholder="Введите Ваш пароль"
        fontFamily="Amatic SC , cursive"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        sx={{
          fontFamily: "Amatic SC , cursive",
          marginTop: 2,
          marginBottom: 2,
          height: "60px",
          width: "100%",
          backgroundColor: "#bdbdbd",
          fontSize: "25px",
          fontWeight: "700",
        }}
        variant="contained"
        color="inherit"
      >
        Войти
      </Button>
      <Typography
        sx={{
          fontFamily: "Amatic SC , cursive",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        У Вас нет аккаунта?
        <a href="/register" className="incitingText">
          Зарегистрируйтесь!
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
