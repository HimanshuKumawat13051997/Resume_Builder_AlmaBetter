import "../App.css";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";

export function Template_2({ props }) {
  const datata = {
    education: {
      degree: "Any",
      endyear: "2024",
      startyear: "2024",
      type: "Grad",
      university: "Any",
    },
    expdetails: [
      {
        jobtitle: "Dummy Manager",
        organisation: "Dummy Organisation",
        endyear: "2024",
        startyear: "2024",
      },
      {
        jobtitle: "Dummy Manager",
        organisation: "Dummy Organisation",
        endyear: "2024",
        startyear: "2024",
      },
    ],
    personalinfo: {
      address: "Address",
      city: "City",
      country: "Country",
      email: "dummy@gmail.com",
      first_name: "Himanshu",
      last_name: "Kumawat",
      mobile: "**********",
      objective:
        "lorem asf asfqwr asfqwf asfw asfaf sfgrgs safwfg af sdsf as ther us gihgb ub tge wikd if",
      postal_code: "123456",
    },
    skills: ["Reactjs", "Nodejs"],
  };

  const Dataz = props;
  const allData = Dataz ? Dataz : datata;

  return (
    <Paper
      elevation={3}
      sx={{
        height: "750px",
        width: { xs: "300px", sm: "500px", md: "550px" },
        padding: "20px",
        backgroundColor: "orange",
      }}
    >
      <Grid
        container
        sx={{
          height: "750px",
          width: { xs: "300px", sm: "500px", md: "550px" },
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            height: "20%",
            display: "flex",
            gap: "100px",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Avatar
            sx={{
              height: { sm: "100px", xs: "50px" },
              width: { sm: "100px", xs: "50px" },
            }}
            src={allData.imagePath}
            variant="square"
          ></Avatar>
          <Typography
            sx={{
              fontSize: "clamp(0.6rem, 0.1016rem + 1.8704vw, 1.775rem)",
              fontWeight: "700",
            }}
          >
            {`${allData.personalinfo.first_name} ${allData.personalinfo.last_name}`}
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sm={5}
          md={5}
          sx={{
            height: "78%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "22%",
              backgroundColor: "#FFF5EE",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Typography
                sx={{
                  fontSize:
                    "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                  fontWeight: 700,
                }}
              >
                Contact
              </Typography>
              <Typography
                sx={{
                  fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                }}
              >
                {`${allData.personalinfo.city}  , ${allData.personalinfo.country}, ${allData.personalinfo.postal_code}`}
              </Typography>
              <Typography
                sx={{
                  fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                }}
              >
                {`Mobile:${allData.personalinfo.mobile}`}
              </Typography>
              <Typography
                sx={{
                  fontSize: "clamp(0.375rem, 0.1918rem + 0.6897vw, 0.8125rem)",
                }}
              >
                {allData.personalinfo.email}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "80%" }}>
            <Typography
              sx={{
                fontSize: "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                fontWeight: 700,
              }}
            >
              Skills
            </Typography>
            {allData.skills.map((item, index) => {
              return (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                  }}
                >
                  {item}
                </Typography>
              );
            })}
          </Box>
          <Box sx={{ width: "80%" }}>
            <Typography
              sx={{
                fontSize: "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                fontWeight: 700,
              }}
            >
              Education
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
              }}
            >{`${allData.education.startyear} - ${allData.education.endyear}`}</Typography>
            <Typography
              sx={{
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",

                fontWeight: 600,
              }}
            >
              {allData.education.type}
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
              }}
            >
              {allData.education.degree}
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
              }}
            >
              {allData.education.university}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={0.03}
          sm={0.03}
          md={0.03}
          sx={{
            height: "78%",
            backgroundColor: "black",
          }}
        ></Grid>
        <Grid
          item
          xs={6.97}
          sm={6.97}
          md={6.97}
          sx={{
            height: "78%",

            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingLeft: "5px",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <Typography
              sx={{
                fontSize: "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                fontWeight: 700,
              }}
            >
              OBJECTIVE
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",

                textAlign: "justify",
              }}
            >
              {allData.personalinfo.objective}
            </Typography>
          </Box>
          <Box sx={{ width: "80%" }}>
            <Typography
              sx={{
                fontSize: "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                fontWeight: 700,
              }}
            >
              WORK HISTORY
            </Typography>
            {allData.expdetails.map((item, index) => {
              return (
                <Box key={index}>
                  <Typography
                    sx={{
                      fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",

                      fontWeight: 600,
                    }}
                  >{`${item.startyear} - ${item.endyear}`}</Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",

                      fontWeight: 700,
                    }}
                  >
                    {item.jobtitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",

                      marginBottom: "10px",
                    }}
                  >
                    {item.organisation}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
