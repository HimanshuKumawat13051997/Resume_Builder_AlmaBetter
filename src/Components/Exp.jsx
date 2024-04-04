import { Divider, Grid, TextField, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { del } from "../Redux/Slice/Expaddition";

export function Exp({ main }) {
  const dispatch = useDispatch();
  //handle delete of new experience
  const deleteExp = (id) => {
    dispatch(del(id));
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={9} sm={10}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "16px",
          }}
        >
          Experience {main.index + 1}
        </Typography>
      </Grid>
      <Grid item xs={0} sm={1}></Grid>
      <Grid
        item
        xs={1}
        sm={1}
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <DeleteOutlineIcon
          onClick={() => {
            deleteExp(main.index);
          }}
        />
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
          Job Title
        </Typography>
        <TextField
          title="Enter"
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "100%" }}
          {...main.pass.register(`expdetails.${main.index}.jobtitle`, {
            required: "*Enter Job Title*",
            pattern: {
              value: /^[A-Za-z\s]+$/g,
              message: "*Please Enter Alphateic Value*",
            },
          })}
          error={
            main.pass.errors.expdetails &&
            main.pass.errors.expdetails[main.index].jobtitle
              ? true
              : false
          }
          helperText={
            main.pass.errors.expdetails &&
            main.pass.errors.expdetails[main.index].jobtitle &&
            main.pass.errors.expdetails[main.index].jobtitle.message
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
          Organisation Name
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: "100%" }}
          {...main.pass.register(`expdetails.${main.index}.organisation`, {
            required: "*Enter organisation Name*",
          })}
          error={
            main.pass.errors.expdetails &&
            main.pass.errors.expdetails[main.index].organisation
              ? true
              : false
          }
          helperText={
            main.pass.errors.expdetails &&
            main.pass.errors.expdetails[main.index].organisation &&
            main.pass.errors.expdetails[main.index].organisation.message
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
          {...main.pass.register(`expdetails.${main.index}.startyear`, {
            required: "*Enter Start Year*",
            pattern: {
              value: /[0-9]|\./g,
              message: "*Numberic Value is Allowed*",
            },
          })}
          error={
            main.pass.errors.expdetails &&
            main.pass.errors.expdetails[main.index].startyear
              ? true
              : false
          }
          helperText={
            main.pass.errors.expdetails &&
            main.pass.errors.expdetails[main.index].startyear &&
            main.pass.errors.expdetails[main.index].startyear.message
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
          {...main.pass.register(`expdetails.${main.index}.endyear`, {
            required: "*Enter End Year*",
            pattern: {
              value: /[0-9]|\./g,
              message: "*Numberic Value is Allowed*",
            },
          })}
          error={
            main.pass.errors.expdetails &&
            main.pass.errors.expdetails[main.index].endyear
              ? true
              : false
          }
          helperText={
            main.pass.errors.expdetails &&
            main.pass.errors.expdetails[main.index].endyear &&
            main.pass.errors.expdetails[main.index].endyear.message
          }
        />
      </Grid>
    </Grid>
  );
}
