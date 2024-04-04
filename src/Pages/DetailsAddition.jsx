import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Button, Grid, Paper } from "@mui/material";
import { PersonalInfo } from "../Components/PersonalInfo";
import { useState } from "react";
import { WorkExperience } from "../Components/WorkExperience";
import { Education } from "../Components/Education";
import { KeySkills } from "../Components/KeySkill";
import { useForm } from "react-hook-form";
import { Preview } from "../Components/Preview";
import { useDispatch, useSelector } from "react-redux";
import { index } from "../Redux/Slice/DetailsIndex";
import { dataStore } from "../Redux/Slice/AllData";
import { SideBar } from "../Components/SideBar";
import { ThreeDots } from "../Components/ThreeDots";
import { visibilityChange } from "../Redux/Slice/PreviewVisibility";

export function DetailsAddition() {
  const value = useSelector((state) => state.i);
  const visbility = useSelector((state) => state.visbile);
  const ID = useSelector((state) => state.IDselector);
  const [formData, setFormData] = useState(null);
  const [imagePath, setImagePath] = useState("");
  const dispatch = useDispatch();

  //code for handle image upload
  const handleImageUpload = (path) => {
    setImagePath(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  // onSubmit handler
  const onSubmit = (data, event) => {
    const updatedFormData = {
      ...data,
      imagePath: imagePath,
      template_id: ID,
    };
    setFormData(updatedFormData);
    if (value === 4) {
      dispatch(visibilityChange(true));
      dispatch(dataStore(updatedFormData));
    } else {
      handleListItemClick(event, value + 1);
    }
  };

  // array containing props of react-hook-form to store information entered into text field
  const array = [
    <PersonalInfo
      pass={{
        register,
        errors,
        setValue,
        getValues,
        handleImageUpload,
        imagePath,
      }}
    />,
    <WorkExperience
      pass={{
        register,
        errors,
        getValues,
        setValue,
      }}
    />,
    <Education pass={{ register, errors, getValues, setValue }} />,
    <KeySkills pass={{ register, errors, getValues, setValue }} />,
  ];

  // handles display of each component in array list when next is clicked
  const handleListItemClick = (event, i) => {
    dispatch(index(i));
  };

  return (
    <div className="additionalclass">
      {visbility === false ? (
        <Grid container>
          <Grid item sm={0.2} md={0.5} lg={1}></Grid>
          <Grid item xs={0} md={0} lg={2}>
            <SideBar />
            <ThreeDots />
          </Grid>
          <Grid item xs={0} sm={0} md={0.5} lg={1}></Grid>
          <Grid item xs={11} md={8} lg={7}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Paper elevation={3}>
                <Grid container>
                  <Grid item xs={12}>
                    <List>{array[value - 1]}</List>
                  </Grid>
                </Grid>
                <Grid container rowSpacing={4}>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    <Divider />
                  </Grid>
                  <Grid item xs={1}></Grid>
                  {value === 1 ? (
                    <Grid item xs={9}></Grid>
                  ) : (
                    <Grid item xs={6}></Grid>
                  )}
                  {value === 1 ? (
                    ""
                  ) : (
                    <>
                      <Grid item xs={2}>
                        <Button
                          fullWidth
                          variant="outlined"
                          size="large"
                          onClick={(event) =>
                            handleListItemClick(event, value - 1)
                          }
                        >
                          Prev
                        </Button>
                      </Grid>
                      <Grid item xs={1}></Grid>
                    </>
                  )}
                  {value === 4 ? (
                    <>
                      <Grid item xs={2}>
                        <Button
                          fullWidth
                          variant="contained"
                          size="large"
                          type="submit"
                        >
                          Preview
                        </Button>
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item xs={2}>
                        <Button
                          fullWidth
                          variant="contained"
                          size="large"
                          type="submit"
                          data-testid="nextBtn"
                        >
                          Next
                        </Button>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={1}></Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
              </Paper>
            </form>
          </Grid>
          <Grid item xs={0.5}></Grid>
        </Grid>
      ) : (
        <Preview />
      )}
    </div>
  );
}
