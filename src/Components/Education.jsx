import { Divider, Grid, TextField, Typography } from "@mui/material";

export function Education({ pass }) {
  return (
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Grid container spacing={4}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "22px",
                  md: "30px",
                },
                fontWeight: "700",
                fontFamily: `"Poppins", sans-serif`,
              }}
            >
              Education Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                },
                fontWeight: "700",
                fontFamily: `"Poppins", sans-serif`,
              }}
            >
              Type
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("education.type", {
                required: "*Enter Type of Course*",
                pattern: {
                  value: /^[A-Za-z\s]+$/g,
                  message: "*Please Enter Alphateic Value*",
                },
              })}
              error={
                pass.errors.education && pass.errors.education.type
                  ? true
                  : false
              }
              helperText={
                pass.errors.education &&
                pass.errors.education.type &&
                pass.errors.education.type.message
              }
            />
          </Grid>
          <Grid item xs={0} sm={6} md={6}></Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                },
                fontWeight: "700",
                fontFamily: `"Poppins", sans-serif`,
              }}
            >
              University
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("education.university", {
                required: "*Enter University Name*",
                pattern: {
                  value: /^[A-Za-z\s]+$/g,
                  message: "*Please Enter Alphateic Value*",
                },
              })}
              error={
                pass.errors.education && pass.errors.education.university
                  ? true
                  : false
              }
              helperText={
                pass.errors.education &&
                pass.errors.education.university &&
                pass.errors.education.university.message
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                },
                fontWeight: "700",
                fontFamily: `"Poppins", sans-serif`,
              }}
            >
              Degree
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("education.degree", {
                required: "Enter Degree Name",
              })}
              error={
                pass.errors.education && pass.errors.education.degree
                  ? true
                  : false
              }
              helperText={
                pass.errors.education &&
                pass.errors.education.degree &&
                pass.errors.education.degree.message
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                },
                fontWeight: "700",
                fontFamily: `"Poppins", sans-serif`,
              }}
            >
              Start Year
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("education.startyear", {
                required: "*Enter Start Year*",
                pattern: {
                  value: /[0-9]|\./g,
                  message: "*Numberic Value is Allowed*",
                },
              })}
              error={
                pass.errors.education && pass.errors.education.startyear
                  ? true
                  : false
              }
              helperText={
                pass.errors.education &&
                pass.errors.education.startyear &&
                pass.errors.education.startyear.message
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  sm: "20px",
                },
                fontWeight: "700",
                fontFamily: `"Poppins", sans-serif`,
              }}
            >
              End Year
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("education.endyear", {
                required: "*Enter Start Year*",
                pattern: {
                  value: /[0-9]|\./g,
                  message: "*Numberic Value is Allowed*",
                },
              })}
              error={
                pass.errors.education && pass.errors.education.endyear
                  ? true
                  : false
              }
              helperText={
                pass.errors.education &&
                pass.errors.education.endyear &&
                pass.errors.education.endyear.message
              }
            />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
