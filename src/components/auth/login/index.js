import { TextField, Button, Typography } from '@mui/material'
import React from 'react'

export default function LoginPage(props) {
  const {setPassword, setEmail} = props;
  
  return (
    <>
        <Typography variant="h2" textAlign="center" fontFamily="Poppins"> Authorization </Typography>
        <Typography variant="body1" marginBottom={3}  textAlign="center" fontFamily="Poppins"> Enter your email and password</Typography>
        <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/> 
        <TextField type="password"  fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
        <Button type="submit" sx={{  fontFamily:"Popins", marginTop: 2, marginBottom:2, height: "60px", width: "100%", backgroundColor: "black" }} variant="contained">Sign in</Button>
        <Typography variant="body1" sx={{ fontFamily: "Popins"}}>Don't have an account?<a href='/register' className="incitingText">Registration</a></Typography>
    </>
  )
}
