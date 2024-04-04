import "../App.css";
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";

export function Template_3({ props }) {
  const datata = {
    education: {
      degree: "Any",
      endyear: "2024",
      startyear: "2023",
      type: "Grad",
      university: "Any",
    },
    expdetails: [
      {
        jobtitle: "Dummy Manager",
        organisation: "Dummy Organisation",
        endyear: "2024",
        startyear: "2023",
      },
      {
        jobtitle: "Dummy Manager",
        organisation: "Dummy Organisation",
        endyear: "2024",
        startyear: "2023",
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
      }}
    >
      <Grid container sx={{ height: "inherit", width: "inherit" }}>
        <Grid container alignItems={"center"} sx={{ height: "15%" }}>
          <Grid item xs={1}>
            <Avatar
              sx={{
                height: {
                  xs: "50px",
                  sm: "75px",
                },
                width: {
                  xs: "50px",
                  sm: "75px",
                },
              }}
              alt="Remy Sharp"
              src={allData.imagePath}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
            <Typography
              sx={{
                fontSize: "clamp(0.59375rem, 0.4152rem + 0.8929vw, 1.21875rem)",
                color: "#A52A2A",
                fontWeight: 700,

                paddingLeft: "10px",
              }}
            >
              {`${allData.personalinfo.first_name} ${allData.personalinfo.last_name} `}
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Typography
              sx={{
                fontSize: "clamp(0.5625rem, 0.3793rem + 0.6897vw, 1rem)",
                color: "#A52A2A",
                fontWeight: 600,
              }}
            >
              {`${allData.personalinfo.address} ${allData.personalinfo.city} ${allData.personalinfo.country} ${allData.personalinfo.postal_code}`}
            </Typography>
          </Grid>
        </Grid>
        <Divider
          sx={{ backgroundColor: "#A52A2A", height: "5px", width: "inherit" }}
        />
        <Grid
          container
          sx={{
            height: "10%",
            color: "#A52A2A",

            fontSize: "clamp(0.75rem, 0.5406rem + 0.7882vw, 1.25rem)",
          }}
        >
          {`${allData.personalinfo.objective}`}
        </Grid>
        <Divider
          sx={{ backgroundColor: "#A52A2A", height: "5px", width: "inherit" }}
        />
        <Grid container sx={{ height: "30%" }}>
          <Grid item xs={5}>
            <Typography
              sx={{
                fontSize: "clamp(0.625rem, 0.4156rem + 0.7882vw, 1.125rem)",
                fontWeight: 600,
                color: "#A52A2A",
              }}
            >
              Professional Experience
            </Typography>
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={6.5}>
            {allData.expdetails.map((item, index) => {
              return (
                <Grid item key={index} sx={{ marginBottom: "5px" }}>
                  <Typography
                    sx={{
                      fontSize:
                        "clamp(0.625rem, 0.4156rem + 0.7882vw, 1.125rem)",
                      fontWeight: 700,
                    }}
                  >
                    {item.jobtitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(0.5625rem, 0.3793rem + 0.6897vw, 1rem)",
                      fontWeight: 400,
                    }}
                  >
                    {item.organisation}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(0.5625rem, 0.3793rem + 0.6897vw, 1rem)",
                      fontWeight: 600,
                    }}
                  >{`${item.startyear}-${item.endyear}`}</Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Divider
          sx={{ backgroundColor: "#A52A2A", height: "5px", width: "inherit" }}
        />
        <Grid container sx={{ height: "20%" }}>
          <Grid item xs={5}>
            <Typography
              sx={{
                fontSize: "clamp(0.625rem, 0.4156rem + 0.7882vw, 1.125rem)",
                fontWeight: 600,
                color: "#A52A2A",
              }}
            >
              Education
            </Typography>
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={6.5}>
            <Typography
              sx={{
                fontSize: "clamp(0.5625rem, 0.3793rem + 0.6897vw, 1rem)",
                fontWeight: 700,
              }}
            >
              {allData.education.degree}
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(0.5625rem, 0.3793rem + 0.6897vw, 1rem)",
                fontWeight: 400,
              }}
            >
              {allData.education.type}
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(0.5625rem, 0.3793rem + 0.6897vw, 1rem)",
                fontWeight: 700,
              }}
            >
              {allData.education.university}
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(0.5625rem, 0.3793rem + 0.6897vw, 1rem)",
                fontWeight: 600,
              }}
            >
              {`${allData.education.startyear}-${allData.education.endyear}`}
            </Typography>
          </Grid>
        </Grid>
        <Divider
          sx={{ backgroundColor: "#A52A2A", height: "5px", width: "inherit" }}
        />
        <Grid container sx={{ height: "20%" }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "clamp(0.625rem, 0.4156rem + 0.7882vw, 1.125rem)",

                fontWeight: 600,
                marginBottom: "10px",
                color: "#A52A2A",
              }}
            >
              Key Skills
            </Typography>

            {allData.skills.map((item, index) => {
              return (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "clamp(0.5625rem, 0.3793rem + 0.6897vw, 1rem)",
                    fontWeight: 600,
                    marginLeft: "15px",
                  }}
                >
                  {item}
                </Typography>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
