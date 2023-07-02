import { useEffect, useState, useMemo } from "react";
import Footer from "../footer";
import Header from "../header";
import SearchItem from "./search";
import { Link } from "react-router-dom";
import "./style.css";
import { Pagination } from "react-boo";
const PAGE_LIMIT = 4;

export default function University() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchI, setSearchI] = useState("");
  // const [isLike, setIsLike] = useState([]);

  const universityId = (id) => {
    return id;
  };
  const filteredUniversity = items.filter((u) => {
    return (
      u.city.toLowerCase().includes(searchI.toLocaleLowerCase()) ||
      u.name.toLowerCase().includes(searchI.toLocaleLowerCase())
    );
  });
  const BASE_URL = "http://localhost:8080";
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    fetch(BASE_URL + "/universities")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const {pagItems, pagStart, pagEnd} = useMemo(() => {
    const pageLimit = Math.ceil(filteredUniversity.length / PAGE_LIMIT);
    let pagItems = [];
    for (let i = 0; i < pageLimit; i++) {
      pagItems.push(
        <Pagination.Item
          key={i}
          active={i === activePage}
          onClick={() => setActivePage(i)}
        >
          {i + 1}
        </Pagination.Item>
      );
    }
    const pagStart = activePage * PAGE_LIMIT;
    const pagEnd = pagStart + PAGE_LIMIT
    return {
      pagItems,
      pagStart,
      pagEnd
    };
  }, [activePage, filteredUniversity.length]);

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
        <SearchItem setSearchI={setSearchI} />
        <div className="cards">
          {filteredUniversity.slice(pagStart, pagEnd).map((item) => (
            <Link to={`/university/${item._id}`} key={item._id}>
              <div className="card" onClick={() => universityId(item._id)}>
                <h2>{item.name}</h2>
                <img className="img" src={item.img} />
                <h3>город {item.city}</h3>
              </div>
            </Link>
          ))}
        </div>
          <Pagination>
            {pagItems}
          </Pagination>

        <Footer />
      </>
    );
  }
}
