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
    <div className="bg-[#FF9800] mt-36 pb-10">
      <Container
        sx={{
          maxWidth: {
            xs: "xs",
            sm: "sm",
            lg: "lg",
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="relative pl-20 ">
          <input
            className="py-3 px-3 rounded-xl w-[500px] text-sm shadow-xl"
            type="text"
            placeholder="Enter Your Email"
          ></input>
          <div className="absolute top-0 text-xs  py-1 px-5 cursor-pointer rounded-xl bg-[#ef4618ec] text-white/80 transform right-24 mr-3 mt-2 normal-case">
            Subscribe
            <EastIcon fontSize="small" />
          </div>
          <div className="mt-16 w-[600px]">
            <Typography variant="h4" fontWeight={800} color="initial">
              pti<span className="text-[#ef4618ec]">.</span>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" fontWeight={600} marginTop={2}>
                Copyright©Tripp.All Right Reserved
              </Typography>
              <Box>
                <IconButton
                  aria-label="google"
                  className="text-[#ef4618ec] bg-white/70 mr-2"
                >
                  <GoogleIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="twitter"
                  className="text-[#ef4618ec] bg-white/70 mr-2"
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="instragram"
                  className="text-[#ef4618ec] bg-white/70 mr-2"
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </div>
        </div>

        <div className="">
          <Image src={footerImage} alt="footerImage" width={300} height={400} />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
