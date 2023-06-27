import { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import "./style.css"


export default function University() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchUni, setSearchUni] = useState("");
  const [isLike, setIsLike] = useState([])

  const filteredUniversity = items.filter(u => {
    return u.country.toLowerCase().includes(searchUni.toLocaleLowerCase()) || u.name.toLowerCase().includes(searchUni.toLocaleLowerCase())
  })


  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country")
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

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
       <Header />
       <div className="block">
        <h2>loading...</h2>

       </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
          <div className="block-search">
            <input id="block-search" type="text" onChange={(e) => setSearchUni(e.target.value)}/>
        </div>
          <table className="users-list" id="table">
            <tr>
                <th>Country</th>
                <th>Name</th>
                <th>Web Pages</th>
                <th>Follow</th>
            </tr>

          {filteredUniversity.map((item, index) => (
            <tr id="list" key={index}>
            <td>{item.country}</td>
            <td>{item.name}</td>
            <td> <a href={`${item.web_pages}`}>{item.web_pages}</a></td>
            <td>
              {isLike? "♥ ": "♡"}
            
            </td>
        </tr>
          ))}
        </table>
        <Footer />
      </>
    );
  }
}

