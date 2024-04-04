import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function PersonalInfo({ pass }) {
  const letClick = (event) => {
    const path = URL.createObjectURL(event.target.files[0]);
    pass.handleImageUpload(path);
  };

  return (
    <Grid container>
      <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <Grid container spacing={4}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Avatar
              alt="Remy Sharp"
              src={pass.imagePath}
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              component="label"
              variant="outlined"
              size="large"
              sx={{
                fontFamily: `"Poppins", sans-serif`,
              }}
            >
              <VisuallyHiddenInput type="file" onChange={letClick} />
              Upload Image
            </Button>
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
              First Name
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("personalinfo.first_name", {
                required: "*Enter First Name*",
                pattern: {
                  value: /^[A-Za-z\s]+$/g,
                  message: "*Please Enter Alphateic Value*",
                },
              })}
              error={
                pass.errors.personalinfo && pass.errors.personalinfo.first_name
                  ? true
                  : false
              }
              helperText={
                pass.errors.personalinfo &&
                pass.errors.personalinfo.first_name &&
                pass.errors.personalinfo.first_name.message
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
              Last Name
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("personalinfo.last_name", {
                required: "*Enter Last Name*",
                pattern: {
                  value: /^[A-Za-z\s]+$/g,
                  message: "*Please Enter Alphateic Value*",
                },
              })}
              error={
                pass.errors.personalinfo && pass.errors.personalinfo.last_name
                  ? true
                  : false
              }
              helperText={
                pass.errors.personalinfo &&
                pass.errors.personalinfo.last_name &&
                pass.errors.personalinfo.last_name.message
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
              Email
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("personalinfo.email", {
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "*Invalid Email Format*",
                },
                required: "*Email Address is Required*",
              })}
              error={
                pass.errors.personalinfo && pass.errors.personalinfo.email
                  ? true
                  : false
              }
              helperText={
                pass.errors.personalinfo &&
                pass.errors.personalinfo.email &&
                pass.errors.personalinfo.email.message
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
              Mobile
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("personalinfo.mobile", {
                pattern: {
                  value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                  message: "*Please Enter Valid Data*",
                },
                required: "*Enter Mobile Number*",
              })}
              error={
                pass.errors.personalinfo && pass.errors.personalinfo.mobile
                  ? true
                  : false
              }
              helperText={
                pass.errors.personalinfo &&
                pass.errors.personalinfo.mobile &&
                pass.errors.personalinfo.mobile.message
              }
            />
          </Grid>
          <Grid item xs={12}>
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
              Address
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("personalinfo.address", {
                required: "*Enter Address*",
              })}
              error={
                pass.errors.personalinfo && pass.errors.personalinfo.address
                  ? true
                  : false
              }
              helperText={
                pass.errors.personalinfo &&
                pass.errors.personalinfo.address &&
                pass.errors.personalinfo.address.message
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
              City
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("personalinfo.city", {
                required: "*Enter City Name*",
                pattern: {
                  value: /^[A-Za-z\s]+$/g,
                  message: "*Please Enter Alphateic Value*",
                },
              })}
              error={
                pass.errors.personalinfo && pass.errors.personalinfo.city
                  ? true
                  : false
              }
              helperText={
                pass.errors.personalinfo &&
                pass.errors.personalinfo.city &&
                pass.errors.personalinfo.city.message
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
              Country
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("personalinfo.country", {
                required: "*Enter Country Name*",
                pattern: {
                  value: /^[A-Za-z\s]+$/g,
                  message: "*Please Enter Alphateic Value*",
                },
              })}
              error={
                pass.errors.personalinfo && pass.errors.personalinfo.country
                  ? true
                  : false
              }
              helperText={
                pass.errors.personalinfo &&
                pass.errors.personalinfo.country &&
                pass.errors.personalinfo.country.message
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
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
              Postal Code
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              {...pass.register("personalinfo.postal_code", {
                pattern: {
                  value: /\d{6}$/,
                  message: "*Enter Correct Postal Code*",
                },
                required: "*Enter Postal Code*",
              })}
              error={
                pass.errors.personalinfo && pass.errors.personalinfo.postal_code
                  ? true
                  : false
              }
              helperText={
                pass.errors.personalinfo &&
                pass.errors.personalinfo.postal_code &&
                pass.errors.personalinfo.postal_code.message
              }
            />
          </Grid>
          <Grid item xs={12}>
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
              Objective
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              fullWidth
              {...pass.register("personalinfo.objective", {
                required: "*Write Objective*",
                pattern: {
                  value: /^[A-Za-z\s.\-,?!:;'"]+$/g,
                  message: "*Please Enter Alphateic Value*",
                },
              })}
              error={
                pass.errors.personalinfo && pass.errors.personalinfo.objective
                  ? true
                  : false
              }
              helperText={
                pass.errors.personalinfo &&
                pass.errors.personalinfo.objective &&
                pass.errors.personalinfo.objective.message
              }
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} md={1} lg={1}></Grid>
    </Grid>
  );
}
