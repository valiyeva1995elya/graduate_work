import React from 'react'
import { TextField, Button, Typography } from '@mui/material'

export default function RegisterPage(props) {
    const {setPassword, setEmail, setName, setSurname, setAge} = props;
   
  return (
    <>
        <Typography variant="h3" textAlign="center" fontFamily="Poppins">Регистрация</Typography>
        <Typography variant="body1" marginBottom={2}  textAlign="center" fontFamily="Poppins">Введите Ваши данные для регистрации аккаунта</Typography>
        <TextField fullWidth={true} onChange={(e) => setName(e.target.value)} margin="normal" label="Имя" variant="outlined" placeholder="Введите Ваше имя" /> 
        <TextField fullWidth={true} onChange={(e) => setSurname(e.target.value)} margin="normal" label="Фамилия" variant="outlined" placeholder="Введите Вашу фамилию" /> 
        <TextField fullWidth={true} onChange={(e) => setAge(e.target.value)} margin="normal" label="Возраст" variant="outlined" placeholder="Введите Ваш возраст" /> 
        <TextField fullWidth={true} onChange={(e) => setEmail(e.target.value)} margin="normal" label="Логин" variant="outlined" placeholder="Введите Ваш логин" /> 
        <TextField type="password" onChange={(e) => setPassword(e.target.value)} fullWidth={true} margin="normal" label="Пароль" variant="outlined" placeholder="Введите Ваш пароль" />
        <Button type="submit" sx={{fontFamily:"Popins", marginTop: 2, marginBottom:2,  height: "60px", width: "100%", backgroundColor: "black" }} variant="contained">Регистрация</Button>
        <Typography variant="body1" sx={{ fontFamily: "Popins"}}>У Вас уже есть аккаунт?<a href='/login' className="incitingText">Авторизация</a></Typography>
        <Typography variant="body1" sx={{ fontFamily: "Popins"}}><a href='/' className="incitingText">Главная страница</a></Typography>
    </>
  )
}
