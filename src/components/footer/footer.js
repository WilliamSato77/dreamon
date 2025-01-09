import React from "react";
import { Box, Typography, IconButton, Grid, Divider } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #1976d2 0%, #2196f3 100%)",
        color: "#fff",
        padding: { xs: "20px", md: "40px" },
        textAlign: "center",
      }}
    >
      {/* Social Media Links */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <IconButton
              href="https://www.facebook.com/profile.php?id=100084805035619&mibextid=ZbWKwL"
              target="_blank"
              sx={{
                color: "#fff",
                transform: "scale(1)",
                transition: "transform 0.3s ease, color 0.3s ease",
                "&:hover": { transform: "scale(1.2)", color: "#ffeb3b" },
              }}
            >
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/part_time_sessions/profilecard/?igsh=MTE4bDN2aDR1ZnV3bQ=="
              target="_blank"
              sx={{
                color: "#fff",
                transform: "scale(1)",
                transition: "transform 0.3s ease, color 0.3s ease",
                "&:hover": { transform: "scale(1.2)", color: "#ff4081" },
              }}
            >
              <Instagram fontSize="large" />
            </IconButton>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
            <Typography
              variant="body2"
              component="a"
              href="/"
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Home
            </Typography>
            <Typography
              variant="body2"
              component="a"
              href="/about"
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              component="a"
              href="/courses"
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Courses
            </Typography>
            <Typography
              variant="body2"
              component="a"
              href="/contact"
              sx={{
                color: "#fff",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Contact Us
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: "#fff", marginY: "20px" }} />

      {/* Footer Bottom Text */}
      <Box sx={{ marginTop: "10px" }}>
        <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}>
          &copy; {new Date().getFullYear()} DreamOn. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
