import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Box,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const navItems = [
  { label: "Home", icon: <HomeIcon />, path: "/" },
  { label: "Courses", icon: <MenuBookIcon />, path: "/courses" },
  { label: "About Us", icon: <InfoIcon />, path: "/about" },
  { label: "Contact Us", icon: <ContactMailIcon />, path: "/contact" },
];

function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const location = useLocation();

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const isActive = (path) => location.pathname === path;

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowBar(false); // Scrolling down
      } else {
        setShowBar(true); // Scrolling up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawerContent = (
    <List>
      {navItems.map((item, index) => (
        <ListItem
          button
          key={index}
          component={Link}
          to={item.path}
          onClick={() => toggleDrawer(false)}
          sx={{
            backgroundColor: isActive(item.path) ? "#e3f2fd" : "transparent",
            color: isActive(item.path) ? "#1976d2" : "inherit",
            borderRadius: "8px",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            "&:hover": {
              backgroundColor: "#bbdefb",
              transform: "scale(1.05)",
            },
            marginBottom: "5px",
          }}
        >
          <ListItemIcon
            sx={{
              color: isActive(item.path) ? "#1976d2" : "inherit",
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Slide in={showBar} direction="down" timeout={500}>
      <AppBar position="fixed" sx={{ backgroundColor: "#1976d2", transition: "all 0.3s ease-in-out" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Dream
                <LightbulbOutlinedIcon
                  sx={{
                    fontSize: "1.5rem",
                    margin: "0 5px",
                    color: "#ffeb3b",
                  }}
                />
                n
              </Typography>
            </Link>
            <Typography
              variant="caption"
              sx={{ color: "#e3f2fd", marginTop: "2px", fontWeight: "300" }}
            >
              Part-Time Sessions
            </Typography>
          </Box>

          <IconButton
            color="inherit"
            edge="start"
            onClick={() => toggleDrawer(true)}
            sx={{
              display: { xs: "block", md: "none" },
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "rotate(15deg) scale(1.2)",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: "2rem" }} />
          </IconButton>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            transitionDuration={300}
            sx={{
              ".MuiDrawer-paper": {
                background: "linear-gradient(to bottom, #1976d2, #64b5f6)",
                color: "#fff",
                animation: "fade-in 0.5s ease",
              },
            }}
          >
            {drawerContent}
          </Drawer>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px", alignItems: "center" }}>
            {navItems.map((item, index) => (
              <Tooltip title={item.label} arrow key={index}>
                <IconButton
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{
                    backgroundColor: isActive(item.path) ? "#e3f2fd" : "transparent",
                    borderRadius: "5px",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default Nav;
