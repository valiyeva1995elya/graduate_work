import React from "react";
import Header from "../header";
import { ImageList, ImageListItem, Typography } from '@mui/material'
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
      img: 'https://univero.cc/public/media/university/imgs/3/%D1%864.jpg',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://testing.kz/images/universites/77/df29222e99499417b28a0d3255753073.jpg',
    },
    {
      img: 'https://img2.storyblok.com/fit-in/1200x630/f/64062/1200x630/dd516e465b/how-to-get-into-stanford.jpg',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/%D0%9C%D0%93%D0%A3%2C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0.jpg/1200px-%D0%9C%D0%93%D0%A3%2C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%B2%D0%BE%D0%B7%D0%B4%D1%83%D1%85%D0%B0.jpg',
      cols: 2,
    },
    {
      img: 'https://lh5.googleusercontent.com/07Vuz7PYtWn539khMoluyKQtzQZpiTJcM7VVHXvsbOdEJTha2yzAr9dbeue82TPQTu20gBVB-saxtIkRWUwIznFmkk_tPKs88GWGmyOkOAdBlcnEHtluagGNc-8Tdg',
      cols: 2,
    },
    {
      img: 'https://api.new.buki.kz/blog_image/Gc/YH/GcYHCg00bQCR8YMph9qotyJxoB1kIW33UzDtoAMo.jpg',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://istu.ru/storage/uploadsevents/images/mezhdunarodnaja-dejatelnost/vuzy-partnery/egypt/egypet1.jpg',
    },
    {
      img: 'https://immigrantinvest.com/wp-content/uploads/2016/02/top-universities-in-europe.jpeg',
    },
    {
      img: 'https://smapse.ru/storage/2021/11/converted/895_0_samye-krasivye-universitety-v-mire-smapse-banner.png',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://politiq.ru/wp-content/uploads/2016/08/universiteti.jpg',
    },
    {
      img: 'https://edu.gov.by/upload/medialibrary/2a4/2a429e02b24c42e1b85eb60bb40bcbae.jpg',
    },
    {
      img: 'https://smapse.ru/image/full/name/v780x400-12.jpg/',
      cols: 2,
    },
  ];

  return (
    <>
      <Header />
      <Typography 
        variant="h2" 
        textAlign="center" 
        fontFamily="Poppins" 
        
        marginTop={5}
        > 
          University of your dreams! 
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
      <Footer/>
    </>
  );
}
