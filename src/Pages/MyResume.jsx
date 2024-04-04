import { Grid, Paper } from "@mui/material";
import { ClickMe } from "../Components/Click";
import { useEffect, useState } from "react";
import { Template } from "../Utlis/Alltemplates";
import { cloneElement } from "react";
import jsPDF from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { handleResumeData } from "../Redux/Slice/HandleMyResume";
import { DefaultMyResume } from "../Components/DefaultMyResume";

export function MyResume() {
  const [hovered, setHovered] = useState(false);
  const file = useSelector((state) => state.myresumedata);
  const dispatch = useDispatch();

  // Code for handling the infite  loop of re rendering
  useEffect(() => {
    const newFile = localStorage.getItem("Resumes")
      ? JSON.parse(window.localStorage.getItem("Resumes"))
      : [];
    dispatch(handleResumeData(newFile));
  }, []);

  // code to return new array containing object with details of matched template_id that has created.
  const details = file.map((item) => {
    let toStore = item;
    let d = Template.find((data) => {
      if (data.id == item.template_id) {
        return data.templatemain;
      }
    });
    return {
      toStore,
      d,
    };
  });

  // For hovering effect on each stored resume
  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // code for handling save on the MyResume page
  const handleSave = (index) => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const element = document.getElementById(index);
    let name = prompt("Please Enter Name");
    pdf.html(element, {
      async callback(pdf) {
        if (name.length > 0) {
          pdf.save(name);
        } else {
          alert("Please enter a file name!");
        }
      },
    });
  };

  //code to handle delete funcationality on myresume component
  const handleDeleteResume = (index) => {
    let items = JSON.parse(localStorage.getItem("Resumes"));
    let newitems = [...items];
    newitems.splice(index, 1);
    localStorage.setItem("Resumes", JSON.stringify(newitems));
    dispatch(handleResumeData(newitems));
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        backgroundColor: details.length <= 0 ? "#909090" : "white",
        marginBottom: "20px",
      }}
    >
      {details.length <= 0 ? (
        <DefaultMyResume /> // shows default component when  no data is available in local storage
      ) : (
        details.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={12}
              md={12}
              lg={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "50px",
              }}
            >
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Paper elevation={3} id={index}>
                  {cloneElement(item.d.templatemain, { props: item.toStore })}
                </Paper>
                {hovered === index && (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={5}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      position: "absolute",
                    }}
                  >
                    <ClickMe
                      props={{ handleSave, index, handleDeleteResume }}
                    />
                  </Grid>
                )}
              </Paper>
            </Grid>
          );
        })
      )}
    </Grid>
  );
}
