import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import "./style.css"


export default function HomePage() {

  const BASE_URL = "http://localhost:8080";

  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();

 
function deleteUser(id) {
  let users = JSON.parse(localStorage.getItem("users"))

  fetch(BASE_URL + "/accounts/" + id, { method: "DELETE" })
        .then(() => alert("Аккаунт удален!"))
        .then(() => localStorage.setItem("users", JSON.stringify(
          users.filter(u => u.email !== user.email)
      )))
        .catch(() => alert("err"))
  


  logOut()
}

function logOut(){
  localStorage.removeItem('user')
  navigate("/")
}
  
  return (
    <>
    
      <Header />
      <div className="block">
        <div className="block-info2">
          <h2>Ваши данные:</h2>
          <div className="block-infoAcc">
            <p className="acc hpName">Имя: <b> {user.name} </b></p>
            <p className="acc hpSurname">Фамилия: <b>{user.surname} </b></p>
            <p className="acc hpSurname">Возраст: <b>{user.age} </b></p>
          </div>
          <div className="btn-block">
            <button onClick={() => deleteUser(user._id)} className="btn2">
              Удалить аккаунт
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
