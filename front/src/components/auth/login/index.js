import { TextField, Button, Typography } from '@mui/material'
import React from 'react'

export default function LoginPage(props) {
  const {setPassword, setEmail} = props;
  
  return (
    <>
        <Typography variant="h2" textAlign="center" fontFamily="Poppins">Войти в аккаунт</Typography>
        <Typography variant="body1" marginBottom={3}  textAlign="center" fontFamily="Poppins">Введите Ваш логин и пароль</Typography>
        <TextField fullWidth={true} margin="normal" label="Логин" variant="outlined" placeholder="Введите Ваш логин" onChange={(e) => setEmail(e.target.value)}/> 
        <TextField type="password"  fullWidth={true} margin="normal" label="Пароль" variant="outlined" placeholder="Введите Ваш пароль" onChange={(e) => setPassword(e.target.value)}/>
        <Button type="submit" sx={{  fontFamily:"Popins", marginTop: 2, marginBottom:2, height: "60px", width: "100%", backgroundColor: "black" }} variant="contained">Войти</Button>
        <Typography variant="body1" sx={{ fontFamily: "Popins"}}>У Вас нет аккаунта на нашем сайте?<a href='/register' className="incitingText">Зарегистрируйтесь!</a></Typography>
        <Typography variant="body1" sx={{ fontFamily: "Popins"}}><a href='/' className="incitingText">Главная страница</a></Typography>
    </>
  )
}
