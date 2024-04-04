import "../App.css";
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";

export function Template_1({ props }) {
  const datata = {
    education: {
      degree: "Any",
      endyear: "2024",
      startyear: "2025",
      type: "Grad",
      university: "Any",
    },
    expdetails: [
      {
        jobtitle: "Dummy Manager",
        organisation: "Dummy Organisation",
        endyear: "2024",
        startyear: "2025",
      },
      {
        jobtitle: "Dummy Manager",
        organisation: "Dummy Organisation",
        endyear: "2024",
        startyear: "2025",
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
        fontFamily: `"Poppins", sans-serif`,
      }}
    >
      <Grid
        container
        sx={{
          height: "inherit",
          width: "inherit",
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            height: "inherit",
            width: "inherit",
            backgroundColor: "#FF8C42",
            padding: "12px",
          }}
        >
          <Grid
            container
            sx={{
              height: {
                xs: "80px",
                sm: "120px",
              },
              width: {
                xs: "80px",
                sm: "120px",
              },
            }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid item>
              <Avatar
                sx={{
                  height: {
                    xs: "75px",
                    sm: "115px",
                  },
                  width: {
                    xs: "75px",
                    sm: "115px",
                  },
                }}
                alt="Remy Sharp"
                src={allData.imagePath}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography
                sx={{
                  fontSize:
                    "clamp(0.59375rem, 0.4152rem + 0.7929vw, 1.11875rem)",
                  mt: 2,
                  fontWeight: 700,
                  fontFamily: `"Poppins", sans-serif`,
                }}
              >
                {`${allData.personalinfo.first_name} ${""} ${
                  allData.personalinfo.last_name
                }`}
              </Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <Grid
            container
            sx={{
              marginTop: {
                xs: "10px",
                sm: "15px",
              },
            }}
          >
            <Grid item>
              <Typography
                sx={{
                  fontSize:
                    "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                  fontFamily: `"Poppins", sans-serif`,
                }}
                variant="h3"
              >
                CONTACT
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ backgroundColor: "gray", border: "1px solid" }} />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "6px", sm: "12px" },
                marginTop: "10px",
                fontSize: "clamp(0.4rem, 0.3271rem + 0.6143vw, 0.8rem)",
              }}
            >
              {allData.personalinfo.email}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "6px", sm: "12px" },
                marginTop: "10px",
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
              }}
            >
              {allData.personalinfo.mobile}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "6px", sm: "12px" },
                marginTop: "10px",
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
              }}
            >
              {`${allData.personalinfo.city} ${allData.personalinfo.country} ${allData.personalinfo.postal_code}`}
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              marginTop: {
                xs: "10px",
                sm: "15px",
              },
            }}
          >
            <Grid item>
              <Typography
                sx={{
                  fontSize:
                    "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                  fontFamily: `"Poppins", sans-serif`,
                }}
                variant="h3"
              >
                OBJECTIVE
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ backgroundColor: "gray", border: "1px solid" }} />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "6px", sm: "20px" },
                marginTop: "10px",
                fontSize: "clamp(0.4rem, 0.3571rem + 0.6143vw, 0.8rem)",
                textAlign: "justify",
              }}
            >
              {allData.personalinfo.objective}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            height: "inherit",
            width: "inherit",
            padding: "12px",
            backgroundColor: "#CFE8EF",
          }}
        >
          <Grid container>
            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  fontSize:
                    "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                  marginBottom: "5px",
                  fontFamily: `"Poppins", sans-serif`,
                }}
              >
                PROFESSIONAL EXPERIENCES
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ backgroundColor: "#F28C28", border: "1px solid #F28C28" }}
              />
            </Grid>
            {allData.expdetails.map((item, index) => {
              return (
                <Grid container key={index}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      color: "gray",
                      fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                      marginTop: "10px",
                      fontWeight: 600,
                    }}
                  >
                    {`${item.startyear} - ${item.endyear}`}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                      marginTop: "10px",
                      fontWeight: 700,
                    }}
                  >
                    {item.jobtitle}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                      marginTop: "10px",
                    }}
                  >
                    {item.organisation}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid container sx={{ marginTop: "20px" }}>
            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  fontSize:
                    "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                  marginBottom: "5px",
                  fontFamily: `"Poppins", sans-serif`,
                }}
              >
                EDUCATION
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ backgroundColor: "#F28C28", border: "1px solid #F28C28" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                color: "gray",
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                marginTop: "10px",
                fontWeight: 600,
              }}
            >
              {`${allData.education.startyear} - ${allData.education.endyear}`}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                marginTop: "10px",
                fontWeight: 700,
              }}
            >
              {`${allData.education.type} - ${allData.education.degree}`}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                marginTop: "10px",
              }}
            >
              {allData.education.university}
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: "20px" }}>
            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  fontSize:
                    "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                  marginBottom: "5px",
                  fontFamily: `"Poppins", sans-serif`,
                }}
              >
                SKILLS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ backgroundColor: "#F28C28", border: "1px solid #F28C28" }}
              />
            </Grid>

            {allData.skills.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{
                    fontSize: "clamp(0.5rem, 0.3571rem + 0.7143vw, 1rem)",
                    marginTop: "10px",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
