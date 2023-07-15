import { useEffect, useState, useMemo } from "react";
import Footer from "../footer";
import Header from "../header";
import SearchItem from "./search";
import "./style.css";
import { Pagination } from "react-bootstrap";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link } from "react-router-dom";
import MySelect from "./select";

export default function University() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchI, setSearchI] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [activePage, setActivePage] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const BASE_URL = "http://localhost:8080";
  const PAGE_LIMIT = 9;

  const postData = async (route, payload) => {
    fetch(BASE_URL + route, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: payload,
    }).catch(() => console.log("Error sending request"));
  };
  const followAd = (id, name, city, email) => {
    const userId = JSON.parse(localStorage.getItem("user"));
    const payload = {
      userId: userId._id,
      id,
      name,
      city,
      email,
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
  const filteredUniversity = items.filter((u) => {
    return (
      u.city.toLowerCase().includes(searchI.toLocaleLowerCase()) ||
      u.name.toLowerCase().includes(searchI.toLocaleLowerCase())
    );
  });

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
  }, [user]);

  const universities = getSortUniversity();
  const { pagItems, pagStart, pagEnd } = useMemo(() => {
    const pageLimit = Math.ceil(universities.length / PAGE_LIMIT);
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
    const pagEnd = pagStart + PAGE_LIMIT;
    return {
      pagItems,
      pagStart,
      pagEnd,
    };
  }, [activePage, universities.length]);
  function getSortUniversity() {
    if (selectedSort === "public_private") {
      return [...filteredUniversity].filter(
        (i) =>
          i.public_private === "Государственный" ||
          i.public_private === "Национальный"
      );
    } else if (selectedSort === "email") {
      return [...filteredUniversity].filter(
        (i) =>
          i.public_private === "Частный" || i.public_private === "Международный"
      );
    } else if (selectedSort) {
      return [...filteredUniversity].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return filteredUniversity;
  }
  const sortUniversity = (s) => {
    setSelectedSort(s);
  };

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
        
          <Typography
            level="h1"
            sx={{
              fontSize: "10vw",
              margin: "30px",
              textAlign: "center",
              fontFamily: "Amatic SC",
              fontWeight: "700",
            }}
            mb={0.5}
          >
            Университеты Казахстана
          </Typography>
          <div className="block-search-select">
            <SearchItem setSearchI={setSearchI} />
            <MySelect
              value={selectedSort}
              onChange={sortUniversity}
              options={[
                { value: "public_private", name: "Государственные" },
                { value: "email", name: "Частные" },
                { value: "name", name: "По названию" },
                { value: "city", name: "По городам" },
              ]}
            />
          </div>
          <div className="cards">
            {universities.slice(pagStart, pagEnd).map((item) => (
              <Card
                key={item._id}
                variant="outlined"
                sx={(theme) => ({
                  margin: 1,
                  width: 300,
                  height: 335,
                  gridColumn: "span 2",
                  flexDirection: "colum",
                  flexWrap: "wrap",
                  overflow: "hidden",

                  transition: "transform 0.3s, border 0.3s",
                  "&:hover": {
                    borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                    transform: "translateY(-2px)",
                  },
                  "& > *": {
                    minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                  },
                })}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100vh",
                    gap: 1,
                    maxWidth: 200,
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <div>
                      <Link to={`/university/${item._id}`}>
                        <Typography
                          level="h2"
                          sx={{
                            fontSize: "25px",
                            textAlign: "left",
                            fontFamily: "Amatic SC",
                            fontWeight: "700",
                          }}
                          mb={0.5}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          textAlign: "left",
                          color: "gray",
                          fontFamily: "Amatic SC",
                          fontWeight: "700",
                        }}
                        level="body2"
                      >
                        город {item.city}
                      </Typography>
                    </div>
                    {user.follows.find((i) => i.id === item._id) ? (
                      <IconButton
                        size="sm"
                        variant="plain"
                        color="neutral"
                        sx={{
                          ml: "auto",
                          alignSelf: "flex-start",
                          color: "red",
                        }}
                        onClick={() => unFollowAd(item._id)}
                      >
                        <FavoriteBorderRoundedIcon color="danger" />
                      </IconButton>
                    ) : (
                      <IconButton
                        size="sm"
                        variant="plain"
                        color="neutral"
                        sx={{ ml: "auto", alignSelf: "flex-start" }}
                        onClick={() =>
                          followAd(item._id, item.name, item.city, item.email)
                        }
                      >
                        <FavoriteBorderRoundedIcon color="danger" />
                      </IconButton>
                    )}
                  </Box>
                  <Link to={`/university/${item._id}`}>
                    <AspectRatio
                      variant="soft"
                      sx={{
                        "--AspectRatio-paddingBottom":
                          "clamp(0px, (100% - 200px) * 999, 200px)",
                        pointerEvents: "none",
                      }}
                    >
                      <img alt="" src={item.img} />
                    </AspectRatio>
                  </Link>
                </Box>
              </Card>
            ))}
          </div>
          <Pagination className="page">{pagItems}</Pagination>
       
        <Footer />
      </>
    );
  }
}
