import React from 'react'
import { TextField, Button, Typography } from '@mui/material'

export default function RegisterPage(props) {
    const {setPassword, setEmail, setName, setSurname} = props;
   
  return (
    <>
        <Typography variant="h2" textAlign="center" fontFamily="Poppins"> Registration </Typography>
        <Typography variant="body1" marginBottom={3}  textAlign="center" fontFamily="Poppins">Enter data for registration</Typography>
        <TextField fullWidth={true} onChange={(e) => setName(e.target.value)} margin="normal" label="Name" variant="outlined" placeholder="Enter your name" /> 
        <TextField fullWidth={true} onChange={(e) => setSurname(e.target.value)} margin="normal" label="Surname" variant="outlined" placeholder="Enter your surname" /> 
        <TextField fullWidth={true} onChange={(e) => setEmail(e.target.value)} margin="normal" label="Email" variant="outlined" placeholder="Enter your email" /> 
        <TextField type="password" onChange={(e) => setPassword(e.target.value)} fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Enter your password" />
        <Button type="submit" sx={{fontFamily:"Popins", marginTop: 2, marginBottom:2,  height: "60px", width: "100%", backgroundColor: "black" }} variant="contained">Registration</Button>
        <Typography variant="body1" sx={{ fontFamily: "Popins"}}>Do you have an account?<a href='/login' className="incitingText">Registration</a></Typography>
    </>
  )
}
