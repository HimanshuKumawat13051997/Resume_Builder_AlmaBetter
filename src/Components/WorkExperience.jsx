import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Exp } from "./Exp";
import { useDispatch, useSelector } from "react-redux";
import { addition } from "../Redux/Slice/Expaddition";

const CustomButton = styled(Button)({
  border: "none",
  "&:hover": {
    backgroundColor: "none",
    border: "none",
  },
});
export function WorkExperience({ pass }) {
  const value = useSelector((state) => state.add);
  const dispatch = useDispatch();

  const handleAddNew = () => {
    dispatch(addition());
  };

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
              Work Experience
            </Typography>
          </Grid>
          {value.map((item, index) => (
            <Grid key={index} item xs={12}>
              <Exp main={{ pass, index }} key={index} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <CustomButton
              sx={{
                display: "flex",
                fontSize: "14px",
                fontWeight: "700",
              }}
              variant="outlined"
              component="span"
              onClick={() => handleAddNew()}
            >
              Add New
            </CustomButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
