"use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Dropdown btn */}
        <div onClick={() => setIsOpen(!isOpen)}>
          <div className="text-black">
            <Button
              variant="text"
              sx={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                width: {
                  xs: "100px",
                  md: "15vw",
                },
                "& SVG": {
                  color: "#FF9800",
                  marginLeft: {
                    xs: "10px",
                    md: "60px",
                  },
                },
              }}
              endIcon={
                isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
              }
            >
              Menu
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl z-10 shadow-md w-[40vw] md:w-[15vw] bg-white text-gray-500 overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              href="/"
              className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            <Link
              href="/details"
              className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Details
            </Link>
            <Link
              href="/category"
              className="block  px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Category
            </Link>

            <Link
              href="/myFavorites"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              My favorites
            </Link>
            <Link
              href="/profile"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Profile
            </Link>
            <Link
              href="/login"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Log In/Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
