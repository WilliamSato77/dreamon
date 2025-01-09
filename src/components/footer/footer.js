import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        color: "#fff",
        padding: { xs: "20px", md: "40px" },
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Social Media Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <IconButton
              href="https://www.facebook.com/profile.php?id=100084805035619&mibextid=ZbWKwL"
              target="_blank"
              sx={{
                color: "#fff",
                "&:hover": { color: "#90caf9" },
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/part_time_sessions/profilecard/?igsh=MTE4bDN2aDR1ZnV3bQ=="
              target="_blank"
              sx={{
                color: "#fff",
                "&:hover": { color: "#90caf9" },
              }}
            >
              <Instagram />
            </IconButton>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
            Quick Links
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href="/"
            sx={{
              color: "#fff",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
              display: "block",
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
              display: "block",
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
              display: "block",
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
              display: "block",
            }}
          >
            Contact Us
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom Text */}
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} DreamOn. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
