import { Stack, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GitHub } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import source from "../source.png";

export function AboutUs() {
  return (
    <>
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <Typography variant="h3" sx={{ fontFamily: `"Poppins", sans-serif` }}>
          Resume Builder
        </Typography>
        <Stack
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "15px",
                  md: "17px",
                  lg: "19px",
                },
                paddingRight: {
                  xs: "15px",
                  sm: "18px",
                  lg: "25px",
                },
                textAlign: "justify",
                fontFamily: `"Poppins", sans-serif`,
              }}
            >
              Welcome to Resume Builder, your ultimate destination for crafting
              professional and impactful resumes that pave the way for your
              career success. At Resume Builder, we understand the pivotal role
              a well-crafted resume plays in showcasing your skills,
              experiences, and aspirations. Our platform is designed to empower
              individuals like you to create resumes that not only stand out but
              also speak volumes about your unique qualifications. Our mission
              at Resume Builder is to simplify the resume-building process,
              making it accessible to everyone. We believe that every individual
              has a story to tell, and your resume is the narrative that sets
              the stage for your professional journey. Whether you're a seasoned
              professional looking to advance your career or a recent graduate
              taking the first steps into the workforce, we are here to guide
              you in presenting your best self on paper.
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "22px",
                  sm: "25px",
                  md: "27px",
                  lg: "30px",
                },
                fontWeight: "400",
                color: "dark",
                fontFamily: `"Poppins", sans-serif`,
                marginTop: "20px",
              }}
            >
              Share with your friends
            </Typography>
            <Box className="icons">
              <Link to="https://www.instagram.com">
                <Instagram
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="error"
                />
              </Link>

              <Link to="https://www.facebook.com">
                <FacebookOutlinedIcon
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="primary"
                />
              </Link>

              <Link to="https://www.linkedin.com/in/himanshu-kumawat-488b58266/">
                <LinkedInIcon
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="primary"
                />
              </Link>
              <Link to="https://web.whatsapp.com">
                <WhatsAppIcon
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="success"
                />
              </Link>
              <Link to="https://www.twitter.com">
                <TwitterIcon
                  sx={{ fontSize: "40px", paddingLeft: "15px" }}
                  color="info"
                />
              </Link>
              <Link to="https://github.com/HimanshuKumawat13051997">
                <GitHub
                  sx={{
                    fontSize: "40px",
                    paddingLeft: "15px",
                    color: "black",
                  }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            sx={{
              placeSelf: "center",
            }}
          >
            <img src={source} alt="img" className="sideimage" />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
