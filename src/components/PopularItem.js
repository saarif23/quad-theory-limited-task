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

//
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300,
    sm: 400,
    lg: 600,
  },
  bgcolor: "background.paper",
  p: {
    xs: 2,
    sm: 3,
    lg: 4,
  },
  boxShadow: 24,
  boxShadow: "#9ca3af",
  borderRadius: 4,
};

const PopularItem = () => {
  const [popularItems, setPopularItems] = useState([]);
  const [recomandedItems, setRecomandedItems] = useState([]);

  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      imageUrl: "",
      IsPopular: "",
      IsRecommended: "",
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(3, "Item name have must atleast 3 characters")
        .required(),
      price: yup.number().required(),
      imageUrl: yup
        .string()
        .min(10, "Image URL  have must atleast 10 characters")
        .required(),
      IsPopular: yup.boolean().required(),
      IsRecommended: yup.boolean().required(),
    }),
    onSubmit: async (values) => {
      // console.log(values.name);
      // console.log(values.price);
      // console.log(values.imageUrl);
      // console.log(values.IsPopular);
      // console.log(values.IsRecommended);

      try {
        const newItem = {
          Name: values.name,
          Price: parseInt(values.price),
          ImageUrl: values.imageUrl,
          IsPopular: values.IsPopular,
          IsRecommended: values.IsRecommended,
        };
        if (values.IsPopular === "true" && values.IsRecommended === "true") {
          popularItems.push(newItem);
          recomandedItems.push(newItem);
          formik.resetForm();
          return;
        }
        if (values.IsPopular === "true") {
          popularItems.push(newItem);
          formik.resetForm();
        }
        if (values.IsRecommended === "true") {
          recomandedItems.push(newItem);
          formik.resetForm();
        }

        console.log(newItem);
      } catch (error) {
        console.log(error);
      }
    },
  });

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
          onClick={handleOpen}
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

        {/* --------------------------- */}
        <Modal
          sx={{ boxShadow: "20px" }}
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                style={{
                  width: "100%",
                  marginBottom: "16px",
                }}
                size="small"
                label="Name"
                variant="outlined"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-sm text-red-600 pl-5">
                  {formik.errors.name}
                </span>
              )}
              <TextField
                style={{
                  width: "100%",
                  marginBottom: "16px",
                }}
                size="small"
                label="Price"
                variant="outlined"
                name="price"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price && (
                <span className="text-sm text-red-600 pl-5">
                  {formik.errors.price}
                </span>
              )}
              <TextField
                style={{
                  width: "100%",
                  marginBottom: "16px",
                }}
                size="small"
                label="ImageUrl"
                variant="outlined"
                name="imageUrl"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.imageUrl}
              />
              {formik.touched.imageUrl && formik.errors.imageUrl && (
                <span className="text-sm text-red-600 pl-5">
                  {formik.errors.imageUrl}
                </span>
              )}
              <TextField
                style={{
                  width: "100%",
                  marginBottom: "16px",
                }}
                size="small"
                label="IsPopular"
                variant="outlined"
                name="IsPopular"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.IsPopular}
              />
              {formik.touched.IsPopular && formik.errors.IsPopular && (
                <span className="text-sm text-red-600 pl-5">
                  {formik.errors.IsPopular}
                </span>
              )}
              <TextField
                style={{
                  width: "100%",
                  marginBottom: "16px",
                }}
                size="small"
                label="IsRecommended"
                variant="outlined"
                name="IsRecommended"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.IsRecommended}
              />
              {formik.touched.IsRecommended && formik.errors.IsRecommended && (
                <span className="text-sm text-red-600 pl-5">
                  {formik.errors.IsRecommended}
                </span>
              )}

              <button
                onClick={handleClose}
                type="submit"
                className="bg-[#FF9800] rounded cursor-pointer  py-2 px-5 w-full text-white font-bold text-lg"
              >
                Add Item
              </button>
            </form>
          </Box>
        </Modal>

        {/*     ------------------------------------- */}
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
          // When screen size is >= 300px
          300: {
            slidesPerView: 2, // Show 1slides
          },
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
        {popularItems.map((item, index) => (
          <SwiperSlide key={index}>
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
          onClick={handleOpen}
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
          // When screen size is >= 300px
          300: {
            slidesPerView: 2, // Show 1slides
          },
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
          <SwiperSlide key={item.Id}>
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
