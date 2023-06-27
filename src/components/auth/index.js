import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoginPage from './login';
import RegisterPage from './register';
import "./style.css"


export default function AuthRootComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const location = useLocation();

   
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(location.pathname === "/register"){
            let users
            if (localStorage.getItem("users")) {
                users = JSON.parse(localStorage.getItem("users"))
            } else {
                users = []
            }

            const payload = {
                email,
                password,
                name,
                surname
            }
            let findUser = users.filter(person => person.email === payload.email)
            if (findUser.length > 0) {
                alert("This email already exist")
                return
            }
            if (checkDate(payload)) {
                users.push(payload)
                localStorage.setItem("users", JSON.stringify(users))
                window.location.href = "/login"
            }
        
        } else if (location.pathname === "/login") {
            let arrCheckUser = JSON.parse(localStorage.getItem('users'))
            for (let i = 0; i <= arrCheckUser.length - 1; i++) {
                if (!validateEmail(email)) {
                    alert("Incorrect email!")
                    break
                } else if (email === arrCheckUser[i].email && password === arrCheckUser[i].password) {
                    localStorage.setItem('saveUser', JSON.stringify(arrCheckUser[i]))
                    document.location.href = '/home'
                }
            }
        }
       
    }
    function checkDate(payload) {
        if (!validateEmail(payload.email)) {
            alert("Incorrect email!")
            return false
        } if (!validatePassword(payload.password)) {
            alert("Incorrect password!")
            return false
        } else if (payload.name.length < 1 || payload.surname.length < 1 || payload.password.length < 1) {
            alert("Complete all data!")
            return false;
        } else {
            return true
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
        return String(password)
            .match(
                /^\S*(?=.*[A-Z])(?=.*[0-9])(?=.*[/$!*])[a-zA-Z0-9*/$!]{8,}\S*$/g
            );
    };

    return(
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
                >
                    {(location.pathname === "/login" ? <LoginPage setEmail={setEmail} setPassword={setPassword}/> : location.pathname === "/register" ? <RegisterPage setEmail={setEmail} setPassword={setPassword} setName={setName} setSurname={setSurname} /> : null)}
                </Box>
            </form>
        </div>
    )

}
