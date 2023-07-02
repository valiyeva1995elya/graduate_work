import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../footer";
import Header from "../../header";
import ".././style.css"

const SingleUniversityPage = () => {
  const navigate = useNavigate();
  const universityId = useParams();
  const idUniversity = universityId.id;
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
  const [university, setUniversity] = useState(Object);
  const BASE_URL = "http://localhost:8080";

  const getUniversity = async (id) => {
    fetch(BASE_URL + `/universities/${id}`)
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

  useEffect(() => {
    if (universityId) {
      getUniversity(idUniversity);
    }
  }, [universityId]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
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
          <div className="single-block" key={university._id}>
            {/* @ts-ignore */}
            <h3>
              <b>{university.name}</b>
            </h3>
            <img src={university.img} />
            <p>
              город<b>{university.address}</b>
            </p>
            <p>
              <b>{university.web_pages}</b>
            </p>
            <p>
              <b>{university.email}</b>
            </p>
            <p>
              <b>{university.description}</b>
            </p>
            <input
              type="button"
              value="back"
              onClick={() => navigate("/university")}
            />
          </div>
        </div>
          <Footer />
      </>
    );
  }
};

export default SingleUniversityPage;
