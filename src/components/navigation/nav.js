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

const navItems = [
  { label: "Home", icon: <HomeIcon />, path: "/" },
  { label: "About Us", icon: <InfoIcon />, path: "/about" },
  { label: "Courses", icon: <MenuBookIcon />, path: "/courses" },
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

  // Hide AppBar on scroll down, show on scroll up
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
          {/* Title Section */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: 1 }}>
              DreamOn
            </Typography>
            <Typography variant="caption" sx={{ color: "#e3f2fd" }}>
              Part-Time Sessions
            </Typography>
          </Box>

          {/* Hamburger Menu for Mobile */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer for Mobile Navigation */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            transitionDuration={300}
            sx={{
              ".MuiDrawer-paper": {
                animation: "fade-in 0.5s ease",
              },
            }}
          >
            {drawerContent}
          </Drawer>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px", alignItems: "center", position: "relative" }}>
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
