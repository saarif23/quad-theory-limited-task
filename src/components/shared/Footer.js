import footerImage from "@/assets/Image2.png";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="bg-[#FF9800] lg:mt-36 pb-10">
      <Container
        sx={{
          maxWidth: {
            xs: "xs",
            sm: "sm",
            lg: "lg",
          },
          display: {
            lg: "flex",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="relative lg:pl-20 max-lg:pt-10 ">
          <input
            className="py-3 px-3 rounded-xl max-md:px-5 w-[360px]   md:w-400px mx-auto lg:w-[500px] text-sm shadow-xl"
            type="text"
            placeholder="Enter Your Email"
          ></input>
          <div className="absolute lg:top-0 max-lg:top-10 max-lg:right-5 text-xs  py-1 px-5 cursor-pointer rounded-xl max-lg:font-bold text-[#ef4618ec] lg:bg-[#ef4618ec] lg:text-white/80 transform lg:right-24 mr-3 mt-2 normal-case">
            Subscribe
            <EastIcon fontSize="small" />
          </div>
          <div className="lg:mt-14 w-[350px] lg:w-[600px]">
            <Typography
              variant="h4"
              fontWeight={800}
              color="initial"
              className="max-lg:hidden"
            >
              pti<span className="text-[#ef4618ec]">.</span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column-reverse",
                  lg: "row",
                },
                justifyContent: "space-between",
                alignItems: "center",
                margin: "15px 0",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={800}
                  color="initial"
                  className="md:hidden my-5"
                >
                  pti<span className="text-[#ef4618ec]">.</span>
                </Typography>
                <Typography variant="body2" fontWeight={600} marginTop={2}>
                  Copyright©Tripp.All Right Reserved
                </Typography>
              </Box>
              <Box>
                <IconButton
                  aria-label="google"

                  // className=" text-white/80 lg:text-[#ef4618ec] max-lg:bg-[#ef4618ec] bg-white/70 mr-2"
                >
                  <GoogleIcon
                    fontSize="large"
                    sx={{
                      color: {
                        xs: "#FFFFFFCC",
                        sm: "#ef4618ec",
                      },
                      backgroundColor: {
                        xs: "#ef4618ec",
                        sm: "#FFFFFFCC",
                      },
                      padding: "8px",
                      borderRadius: "100%",
                      marginRight: "2px",
                    }}
                  />
                </IconButton>
                <IconButton aria-label="twitter">
                  <TwitterIcon
                    fontSize="large"
                    sx={{
                      color: {
                        xs: "#FFFFFFCC",
                        sm: "#ef4618ec",
                      },
                      backgroundColor: {
                        xs: "#ef4618ec",
                        sm: "#FFFFFFCC",
                      },
                      padding: "8px",
                      borderRadius: "100%",
                      marginRight: "2px",
                    }}
                  />
                </IconButton>
                <IconButton aria-label="instragram">
                  <InstagramIcon
                    fontSize="large"
                    sx={{
                      color: {
                        xs: "#FFFFFFCC",
                        sm: "#ef4618ec",
                      },
                      backgroundColor: {
                        xs: "#ef4618ec",
                        sm: "#FFFFFFCC",
                      },
                      padding: "8px",
                      borderRadius: "100%",
                      marginRight: "2px",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </div>
        </div>

        <div className="max-lg:hidden">
          <Image src={footerImage} alt="footerImage" width={300} height={400} />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
