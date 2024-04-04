import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Template } from "../Utlis/Alltemplates";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleSelector } from "../Redux/Slice/IDselector";

export function MainTemplate() {
  // code for hovering effect on Templates
  const [hovered, setHovered] = useState(false);

  const dispatch = useDispatch();
  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  //Code for storing the selected template_id on redux
  const HandymanOutlined = (id) => {
    dispatch(handleSelector(id));
  };

  return (
    <Grid
      container
      sx={{ height: "90vh", padding: "10px" }}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Grid item xs={12} sx={{ paddingLeft: "20px" }}>
        <Grid item xs={10}>
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "25px",
                sm: "35px",
                md: "60px",
              },
              fontFamily: `"Poppins", sans-serif`,
              fontWeight: 700,
            }}
          >
            Templates
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ marginTop: "10px" }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: "16px",
                sm: "26px",
                md: "36px",
              },
              fontFamily: `"Poppins", sans-serif`,
            }}
          >
            Select a Template to get Started
          </Typography>
        </Grid>
      </Grid>
      {Template.map((tem) => {
        return (
          <Grid
            key={tem.id}
            item
            xs={10}
            sm={5.8}
            md={4}
            lg={2.8}
            sx={{ border: "1px solid", borderRadius: "4px", margin: "2px" }}
          >
            <Card
              onMouseEnter={() => handleMouseEnter(tem.id)}
              onMouseLeave={handleMouseLeave}
              sx={{ position: "relative" }}
            >
              <CardMedia component="img" image={tem.url} alt="" />
              {hovered === tem.id && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: "100%" }}
                  >
                    <Link to="/createresume">
                      <Button
                        variant="contained"
                        onClick={() => HandymanOutlined(tem.id)}
                      >
                        Use Template
                      </Button>
                    </Link>
                  </Stack>
                </Box>
              )}
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
