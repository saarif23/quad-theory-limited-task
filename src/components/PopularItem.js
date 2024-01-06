"use client";

import getPopularItem from "@/utils/getPopularItem";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const PopularItem = () => {
  const [popularItems, setPopularItems] = useState([]);
  const [recomandedItems, setRecomandedItems] = useState([]);
  useEffect(() => {
    const getAllItems = async () => {
      const { Items } = await getPopularItem();
      const popularItem = Items.filter((Item) => Item.IsPopular === true);
      setPopularItems(popularItem);
      const recomandedItems = Items.filter(
        (Item) => Item.IsRecommended === true
      );
      setRecomandedItems(recomandedItems);
    };
    getAllItems();
  }, []);

  //   console.log(popularItems);
  //   console.log(recomandedItems);

  return (
    <Container
      sx={{
        maxWidth: {
          xs: "xs",
          sm: "sm",
          lg: "lg",
        },
      }}
    >
        
      {/* Popular Items-------------------------------- */}
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="text"
          style={{
            color: "#454545",
            fontWeight: "600",
            textTransform: "none",
            fontSize: "20px",
          }}
        >
          Popular
        </Button>
        <Button
          variant="text"
          sx={{
            color: "#FF9800",
            textTransform: "none",
          }}
        >
          AddMore
          <ArrowBackIosNewIcon sx={{ color: "gray" }} fontSize="small" />
          <ArrowForwardIosIcon sx={{ color: "black" }} fontSize="small" />
        </Button>
      </Box>
      <Swiper
        className="mySwiper"
        // slidesPerView={6}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          // When screen size is >= 400px
          400: {
            slidesPerView: 2, // Show 2 slides
          },
          // When screen size is >= 640px
          640: {
            slidesPerView: 3, // Show 3 slides
          },

          // When screen size is >= 1024px
          1024: {
            slidesPerView: 5, // Show 5 slides
          },
        }}
      >
        {popularItems.map((item) => (
          <SwiperSlide key={item}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Card sx={{ borderRadius: "10px", marginBottom: "5px" }}>
                <Image
                  src={item.ImageUrl}
                  alt="item"
                  width="250"
                  height="250"
                  style={{
                    height: "250px",
                  }}
                />
              </Card>
              <Typography variant="body2" color="initial">
                {item.Name}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Recomanded Items-------------------------------- */}
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="text"
          style={{
            color: "#454545",
            fontWeight: "600",
            textTransform: "none",
            fontSize: "20px",
          }}
        >
          Recomanded
        </Button>
        <Button
          variant="text"
          sx={{
            color: "#FF9800",
            textTransform: "none",
          }}
        >
          AddMore
          <ArrowBackIosNewIcon sx={{ color: "gray" }} fontSize="small" />
          <ArrowForwardIosIcon sx={{ color: "black" }} fontSize="small" />
        </Button>
      </Box>
      <Swiper
        className="mySwiper"
        // slidesPerView={6}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          // When screen size is >= 400px
          400: {
            slidesPerView: 2, // Show 2 slides
          },
          // When screen size is >= 640px
          640: {
            slidesPerView: 3, // Show 3 slides
          },

          // When screen size is >= 1024px
          1024: {
            slidesPerView: 5, // Show 5 slides
          },
        }}
      >
        {recomandedItems.map((item) => (
          <SwiperSlide key={item}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Card sx={{ borderRadius: "10px", marginBottom: "5px" }}>
                <Image
                  src={item.ImageUrl}
                  alt="item"
                  width="250"
                  height="250"
                  style={{
                    height: "250px",
                  }}
                />
              </Card>
              <Typography variant="body2" color="initial">
                {item.Name}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default PopularItem;
