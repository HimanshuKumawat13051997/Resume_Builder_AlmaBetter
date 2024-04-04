import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { skillsaddition, skillsdel } from "../Redux/Slice/KeySkillsAddition";

const CustomButton = styled(Button)({
  border: "none",
  "&:hover": {
    backgroundColor: "none",
    border: "none",
  },
});

export function KeySkills({ pass }) {
  const value = useSelector((state) => state.skill);
  const dispatch = useDispatch();

  //handles addition of new skills
  const handleAddNew = () => {
    dispatch(skillsaddition());
  };

  //handles deletion of skill field
  const handleDelete = (id) => {
    dispatch(skillsdel(id));
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
              Key Skills
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {value.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item xs={10} md={4.5}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  {...pass.register(`skills.${index}`, {
                    required: "*Enter Skill Name*",
                    pattern: {
                      value: /^[A-Za-z\s.\-,?!:;'"]+$/g,
                      message: "*Please Enter Alphateic Value*",
                    },
                  })}
                  error={
                    pass.errors.skills && pass.errors.skills[index]
                      ? true
                      : false
                  }
                  helperText={
                    pass.errors.skills &&
                    pass.errors.skills[index] &&
                    pass.errors.skills[index].message
                  }
                />
              </Grid>
              <Grid
                item
                xs={1}
                md={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <DeleteOutlineIcon
                  onClick={() => {
                    handleDelete(index);
                  }}
                />
              </Grid>
              {index % 2 === 0 && <Grid item xs={0} md={1}></Grid>}
            </React.Fragment>
          ))}
          <Grid item xs={12} md={5.5}>
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
