"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Container, Menu } from "@mui/material";
import MenuDropdown from "../MenuDropdown";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
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
      <div className="flex justify-between items-center my-5">
        <Typography
          variant="h5"
          component="div"
          color="black"
          fontWeight="800"
          marginRight="20px"
        >
          pti.
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Search
            sx={{
              backgroundColor: "white",
              width: {
                xs: "100%",
                sm:"400px",
                lg: "500px",
              },
              color: "black",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#FF9800" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Audiobook"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{
              backgroundColor: "white",
            }}
          >
            <MenuDropdown />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Avatar
            sx={{
              color: "white",
              backgroundColor: "#EF4040",
            }}
          />
        </Box>
      </div>
    </Container>
  );
};

export default Navbar;
