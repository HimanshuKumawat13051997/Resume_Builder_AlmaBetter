import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch } from "react-redux";

export function Navbar() {
  const dispatch = useDispatch();
  const drawerWidth = 240;
  const navItems = [
    { labeled: "RESUME TEMPLATES", linkedto: "/" },
    { labeled: "MY RESUMES", linkedto: "/MyResume" },
    { labeled: "ABOUT US", linkedto: "/AboutUs" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToogle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    typeof window !== "undefined" ? window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          position: "sticky",
          backgroundColor: "white",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          padding: { md: "0px 50px 0px 0px" },
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToogle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", md: "block" },
            }}
          >
            <Link to={"/"}>
              <img className="logoimage" src={logo} alt="" />
            </Link>
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "row" }}
            data-testid="navbar"
          >
            {navItems.map((link, index) => (
              <NavLink
                data-testid={link.labeled}
                key={index}
                to={link.linkedto}
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "blue" : "gray",
                    textDecoration: "none",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              >
                <ListItem
                  sx={{
                    fontSize: {
                      sm: "16px",
                      md: "22px",
                    },
                    fontFamily: `Poppins`,
                    listStyleType: "none",
                  }}
                >
                  {link.labeled}
                </ListItem>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToogle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToogle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              <Link to={"/"}>
                <img className="logoimage" src={logo} alt="" />
              </Link>
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {navItems.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.linkedto}
                  style={({ isActive, isPending }) => {
                    return {
                      color: isActive ? "blue" : "gray",
                      textDecoration: "none",
                    };
                  }}
                  className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                  }}
                >
                  <ListItem
                    sx={{
                      fontSize: {
                        sm: "16px",
                        md: "22px",
                      },
                      fontFamily: `Poppins`,
                      listStyleType: "none",
                    }}
                  >
                    {link.labeled}
                  </ListItem>
                </NavLink>
              ))}
            </Box>
            {/* <List>
              {navItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    sx={{
                      textAlign: "center",
                    }}
                    to={item.linkedto}
                    LinkComponent={Link}
                  >

                    <ListItemText
                      sx={{
                        fontFamily: `"Poppins", sans-serif`,
                        fontWeight: 700,
                      }}
                      primary={item.labeled}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}
