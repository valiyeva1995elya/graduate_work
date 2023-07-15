import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import Footer from "../../footer";
import Header from "../../header";
import ".././style.css";
import { Link } from "react-router-dom";

const SingleUniversityPage = () => {
  const navigate = useNavigate();
  const universityId = useParams();
  const idUniversity = universityId.id;
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
  const [university, setUniversity] = useState(Object);
  const BASE_URL = "http://localhost:8080";
  const user = JSON.parse(localStorage.getItem("user"));
  const follow = user.follows;

  const getUniversity = async (id) => {
    await fetch(BASE_URL + `/universities/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUniversity(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const postData = async (route, payload) => {
    await fetch(BASE_URL + route, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: payload,
    }).catch((error) => console.log(error));
  };

  const followAd = (universityId) => {
    const userId = JSON.parse(localStorage.getItem("user"));
    const payload = {
      userId: userId._id,
      id: universityId,
      name: university.name,
      city: university.city,
      email: university.email,
    };
    const jsonPayload = JSON.stringify(payload);
    postData("/accounts/follow", jsonPayload);
    userId.follows.push(payload);
    localStorage.setItem("user", JSON.stringify(userId));
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

  useEffect(() => {
    if (universityId) {
      getUniversity(idUniversity);
    }
  }, [universityId, follow]);

  if (error) {
    return <div> Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <Header />
        <div className="block">
          <h2>Загрузка...</h2>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className="block">
          <Typography
            level="h2"
            sx={{
              fontSize: "4vw",
              textAlign: "center",
              fontFamily: "Amatic SC",
              fontWeight: "700",
              marginTop: "30px",
            }}
          >
            {university.name}
          </Typography>
          <div className="single-block" key={university._id}>
            <div className="mobile">
              <div className="flex-data">
                <Link to={`/university/${university._id}/img`}>
                  <img className="img-block" src={university.img} alt="" />
                </Link>
                <>
                  <Typography
                    level="h2"
                    sx={{
                      fontSize: "2.5vw",
                      textAlign: "center",
                      fontFamily: "Amatic SC",
                      fontWeight: "700",
                    }}
                  >
                    Университет расположен по адресу:
                    <br />
                    {university.address} <br />
                    email: {university.email}
                    <br />
                    Чтобы перейти на официальный сайт, нажмите
                    <a href={university.web_pages}>
                      <i>сюда</i>
                    </a>
                  </Typography>
                </>
              </div>
              <div className="block-info">
                <Typography
                  level="h2"
                  sx={{
                    fontSize: "3vw",
                    textAlign: "justify",
                    fontFamily: "Amatic SC",
                    fontWeight: "700",
                    marginBottom: "20px"
                  }}
                >
                  {university.description}
                </Typography>

                <div>
                  {user.follows.find((i) => i.id === university._id) ? (
                    <input
                      type="button"
                      value="Убрать из списка"
                      className="btn"
                      onClick={() => unFollowAd(university._id)}
                    />
                  ) : (
                    <input
                      type="button"
                      value="Добавить в список"
                      className="btn"
                      onClick={() => followAd(university._id)}
                    />
                  )}

                  <input
                    type="button"
                    value="Назад"
                    className="btn"
                    onClick={() => navigate("/university")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default SingleUniversityPage;
