import React from "react";
import Footer from "../footer";
import Header from "../header";
import "./style.css"

export default function HomePage() {

  const user = JSON.parse(localStorage.getItem('saveUser'))

 
function deleteUser() {
  let users = JSON.parse(localStorage.getItem("users"))
  let saveUser = JSON.parse(localStorage.getItem("saveUser"))
  localStorage.setItem("users", JSON.stringify(
      users.filter(user => user.email !== saveUser.email)
  ))
  logOut()
}
function logOut(){
  localStorage.removeItem('saveUser')
    window.location.href = "/"
}
  
  return (
    <>
      <Header />
      <div className="block">
        <div className="block-info2">
          <h2>Information:</h2>
          <div className="block-infoAcc">
            <p className="acc hpName">Name: <b> {user.name} </b></p>
            <p className="acc hpSurname">Surname: <b>{user.surname} </b></p>
          </div>
          <div className="btn-block">
            <button onClick={deleteUser} className="btn2">
              delete account
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
