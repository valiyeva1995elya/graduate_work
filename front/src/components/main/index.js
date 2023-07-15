import React from "react";
import Header from "../header";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import Footer from "../footer";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Main() {
  const itemData = [
    {
      img: "https://inbusiness.kz/uploads/37/images/i00URlaE.jpeg",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://testing.kz/images/universites/77/df29222e99499417b28a0d3255753073.jpg",
    },
    {
      img: "https://weproject.media/upload/iblock/63e/63efa8fa2f2c346124d0a7fff9a07d1c.jpg",
    },
    {
      img: "https://univery.kz/images/kazakhskij-natsionalnyj-universitet-iskusstv.jpg",
      cols: 2,
    },
    {
      img: "https://tengrinews.kz/userdata/images/u320/resized/0fa82c6a6a11cfe298eeb275a396b89f.png",
      cols: 2,
    },
    {
      img: "https://api.new.buki.kz/blog_image/Gc/YH/GcYHCg00bQCR8YMph9qotyJxoB1kIW33UzDtoAMo.jpg",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://smu.edu.kz/wp-content/uploads/2019/09/img_3489.jpg",
    },
    {
      img: "https://bilimdinews.kz/wp-content/uploads/2021/08/%D0%B0%D1%82%D1%8B%D1%80%D0%B0%D1%83-600.jpg",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/%D0%90%D0%BA%D0%B8%D0%BC%D0%B0%D1%82_%D0%9A%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%B0%D0%B9.jpg/1200px-%D0%90%D0%BA%D0%B8%D0%BC%D0%B0%D1%82_%D0%9A%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%B0%D0%B9.jpg",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://sputnik.kz/img/07e6/08/0f/26715789_0:0:3072:1728_1920x0_80_0_0_d61993b8727f21f84c104ce1c55ef71b.jpg",
    },
    {
      img: "https://www.gov.kz/uploads/2022/2/21/656d0a5558df43c75c1551f8efb00bfb_original.609897.png",
    },
    {
      img: "https://ru.egemen.kz/media/2021/06/09/whatsapp-image-2021-06-09-at-10.24.30.jpeg",
      cols: 2,
    },
  ];

  return (
    <>
      <Header />
      <Typography
        variant="h1"
        textAlign="center"
        fontFamily="Amatic SC , cursive"
        fontWeight={700}
        color="#222222"
        marginTop={5}
      >
        Выбери университет своей мечты!
      </Typography>
      <ImageList
        sx={{ width: "90%", height: "100vh", padding: "1% 5%" }}
        variant="quilted"
        cols={4}
        rowHeight={250}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Footer />
    </>
  );
}
