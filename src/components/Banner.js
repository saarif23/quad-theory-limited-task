import { Container, Typography } from "@mui/material";
import Image from "next/image";
import img1 from "../assets/Image3.png";
const Banner = () => {
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
      <div className="lg:bg-[#FF9800] flex max-lg:flex-col max-lg:gap-20 items-center lg:pl-20 rounded-2xl my-20">
        <div className="flex-1 space-y-4  max-lg:text-center">
          <Typography
            sx={{
              color: {
                xs: "black",
                sm: "black",
                lg: "white",
              },
              fontSize: {
                xs: "32px",
                sm: "38px",
                lg: "48px",
              },
            }}
            style={{
              lineHeight: 1.2,
              fontWeight: "700",
            }}
          >
            Deliver Food To Your Door Step|
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: {
                xs: "#718096",
                lg: "#FFFFFFB3",
              },
              fontSize: "16px",
              letterSpacing:"2px"
            }}
          >
            Authentic Food|, Quick Service, Fast Delivery
          </Typography>
        </div>
        <div className="lg:flex-1  max-lg:bg-[#EA906C] rounded-xl">
          <Image
            src={img1}
            width="500"
            height="500"
            alt="banner-image"
            className="lg:pt-16 lg:pr-5 -mt-9 rounded-xl"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
