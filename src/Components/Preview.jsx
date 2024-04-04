import { Button, Grid, TextField, Typography } from "@mui/material";
import { jsPDF } from "jspdf";
import "svg2pdf.js";
import { Template } from "../Utlis/Alltemplates.jsx";
import { useDispatch, useSelector } from "react-redux";
import { cloneElement } from "react";
import { setFileName } from "../Redux/Slice/FileName.js";
import { handleModal } from "../Redux/Slice/ModalSlice.js";
import BasicModal from "./Modal.jsx";
import { visibilityChange } from "../Redux/Slice/PreviewVisibility.js";

export function Preview() {
  const name = useSelector((state) => state.f);
  const dispatch = useDispatch();
  const clickBack = () => {
    dispatch(visibilityChange(false));
  };

  const toStore = useSelector((state) => state.data);

  // code for finding template that is selected when template is selected from homepage with the help for template_id
  const template = Template.find((item) => {
    return item.id == toStore.template_id;
  });
  const { templatemain } = template || {};

  const handleFileName = (event) => {
    dispatch(setFileName(event.target.value));
  };

  //handle save and local storage for populating the Myresume page
  const handleSave = () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const element = document.getElementById("toDownload");
    pdf.html(element, {
      async callback(pdf) {
        if (name.length > 0) {
          pdf.save(name);
          dispatch(setFileName(""));
          let resumes = localStorage.getItem("Resumes");
          if (resumes) {
            let resume = JSON.parse(resumes);
            resume.push(toStore);
            localStorage.setItem("Resumes", JSON.stringify(resume));
          } else {
            localStorage.setItem("Resumes", JSON.stringify([toStore]));
          }
          dispatch(handleModal(true));
        } else {
          alert("Please enter a file name!");
        }
      },
    });
  };

  return (
    <Grid container>
      <BasicModal />
      <Grid item xs={0.5} sm={0.5} md={0.5} lg={2}></Grid>
      <Grid item xs={11} sm={11} md={11} lg={8}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "30px",
                },
                fontWeight: "600",
              }}
            >
              Resume Preview
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={8}
            sx={{
              marginTop: {
                xs: "10px",
              },
            }}
            id="toDownload"
          >
            {cloneElement(templatemain, { props: toStore })}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={4}
            sx={{
              marginTop: {
                xs: "20px",
                sm: "50px",
                md: "0px",
              },
            }}
          >
            <Grid
              container
              sx={{
                width: {
                  lg: "400px",
                  md: "300px",
                  sm: "540px",
                  xs: "340px",
                },
              }}
            >
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "20px",
                    },
                    fontWeight: "600",
                  }}
                >
                  Create a File Name
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  marginTop: {
                    xs: "0px",
                    sm: "20px",
                    md: "30px",
                    lg: "50px",
                  },
                }}
              >
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  onChange={handleFileName}
                  value={name}
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "40px",
                    },
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "50px",
                  },
                }}
                xs={5.5}
              >
                <Button
                  onClick={() => clickBack()}
                  fullWidth
                  variant="outlined"
                  data-testid="backBtn"
                >
                  Back
                </Button>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid
                item
                xs={5.5}
                sx={{
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "50px",
                  },
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => handleSave()}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={0.5} sm={0.5} md={0.5} lg={2}></Grid>
    </Grid>
  );
}
