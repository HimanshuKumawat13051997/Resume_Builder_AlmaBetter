import { Divider, List, ListItemButton, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import FaceIcon from "@mui/icons-material/Face";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export function SideBar() {
  const value = useSelector((state) => state.i);

  return (
    <Paper
      elevation={3}
      sx={{
        width: {
          md: "200px",
          lg: "300px",
        },
        bgcolor: "background.paper",
        display: {
          xs: "none",
          sm: "none",
          md: "block",
        },
      }}
    >
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={value === 1}
          sx={{
            fontFamily: `"Poppins", sans-serif`,
            height: "50px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <FaceIcon color="primary" />
          <span>Personal Info</span>
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={value === 2}
          sx={{
            fontFamily: `"Poppins", sans-serif`,
            height: "50px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <BusinessCenterIcon color="primary" />
          <span>Work Experience</span>
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={value === 3}
          sx={{
            fontFamily: `"Poppins", sans-serif`,
            height: "50px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <SchoolIcon color="primary" />
          <span>Education</span>
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={value === 4}
          sx={{
            fontFamily: `"Poppins", sans-serif`,
            height: "50px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <AutoAwesomeIcon color="primary" />
          <span>Key Skills</span>
        </ListItemButton>
      </List>
    </Paper>
  );
}
