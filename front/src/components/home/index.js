import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import Modal from "./Modal";
import "./style.css";

export default function HomePage() {
  const BASE_URL = "http://localhost:8080";
  const [users, setUsers] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const follow = user.follows;
  const navigate = useNavigate();

  const deleteUser = async (id) => {
    let users = JSON.parse(localStorage.getItem("users"));

    await fetch(BASE_URL + "/accounts/" + id, { method: "DELETE" })
      .then(() => alert("Аккаунт удален!"))
      .then(() =>
        localStorage.setItem(
          "users",
          JSON.stringify(users.filter((u) => u.email !== user.email))
        )
      )
      .catch(() => alert("err"));
    logOut();
  };
  const postData = async (route, payload) => {
    await fetch(BASE_URL + route, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: payload,
    })
      .then(() => console.log("parsed"))
      .catch(() => console.log("Error sending request"));
  };
  const unFollowAd = (universityId) => {
    const userId = JSON.parse(localStorage.getItem("user"));

    const payload = {
      userId: userId._id,
      followedId: universityId,
    };
    const jsonPayload = JSON.stringify(payload);
    postData("/accounts/unfollow", jsonPayload);
    userId.follows = userId.follows.filter((item) => item.id !== universityId);
    localStorage.setItem("user", JSON.stringify(userId));
  };

  function logOut() {
    localStorage.removeItem("user");
    navigate("/");
  }

  useEffect(() => {
    fetch(BASE_URL + "/accounts")
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [user]);
  return (
    <>
      <Header />

      <div className="block-home">
        <div className="block-info2">
          <h2 className="text-data">Ваши данные:</h2>
          <div className="flex">
            <div className="block-infoAcc">
              <p className="acc">
                Имя: <b> {user.name} </b>
              </p>
              <p className="acc">
                Фамилия: <b>{user.surname} </b>
              </p>
              <p className="acc">
                Возраст: <b>{user.age} </b>
              </p>
            </div>
            <div className="btn-block">
              <button onClick={() => setModalActive(true)} className="btn2">
                Изменить данные
              </button>
              <button onClick={() => deleteUser(user._id)} className="btn2">
                Удалить аккаунт
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
      {follow.length > 0 ? (
        <div className="block-fav-university">
          <h3 className="text-data">Список интерисующих университетов</h3>
          <table>
            <thead>
              <tr>
                <th className="wh">№</th>
                <th className="wh">Название</th>
                <th className="wh">Город</th>
                <th className="wh">Электронная почта</th>
                <th className="wh">Убрать из списка</th>
              </tr>
            </thead>
            <tbody>
              {follow.map((item, index) => (
                <tr key={index}>
                  <td className="wh">{index + 1}</td>
                  <td
                    className="wh"
                    onClick={() => navigate(`/university/${item.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </td>
                  <td className="wh">{item.city}</td>
                  <td className="wh">{item.email}</td>
                  <td className="wh">
                    <button
                      className="btn2"
                      onClick={() => unFollowAd(item.id)}
                    >
                      &#10006;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      <Footer />
    </>
  );
}
