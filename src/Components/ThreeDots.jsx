import { Box, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useSelector } from "react-redux";
import FaceIcon from "@mui/icons-material/Face";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export function ThreeDots() {
  const value = useSelector((state) => state.i);

  //code for three dots when screen  size is smaller than sm or for mobile screen
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // handles anchor close
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: {
          md: "none",
        },
      }}
    >
      <MoreVertIcon
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          selected={value === 1}
          sx={{
            fontFamily: `"Poppins", sans-serif`,
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <FaceIcon color="primary" />
          <span>Personal Info</span>
        </MenuItem>
        <MenuItem
          selected={value === 2}
          sx={{
            fontFamily: `"Poppins", sans-serif`,
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <BusinessCenterIcon color="primary" />
          <span>Work Experience</span>
        </MenuItem>
        <MenuItem
          selected={value === 3}
          sx={{
            fontFamily: `"Poppins", sans-serif`,
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <SchoolIcon color="primary" />
          <span>Education</span>
        </MenuItem>
        <MenuItem
          selected={value === 4}
          sx={{
            fontFamily: `"Poppins", sans-serif`,
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <AutoAwesomeIcon color="primary" />
          <span>Key Skills</span>
        </MenuItem>
      </Menu>
    </Box>
  );
}
