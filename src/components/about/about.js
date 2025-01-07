import React from "react";
import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import aboutImage from "../../assets/about1.jpg"; // Replace with your image path

function About() {
  return (
    <Box
      sx={{
        position: "relative", // Make Box relative to position the overlay
        padding: { xs: "40px 20px", md: "80px 40px" },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff", // Adjust text color for better visibility
      }}
    >
      {/* Background Image with Blur Effect */}
      <Box
        sx={{
          position: "absolute", // Position it behind the content
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(6px)", // Apply blur effect to the background image
          zIndex: -1, // Ensure the background stays behind the content
        }}
      />

      {/* Section Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "40px",
          fontSize: { xs: "2rem", md: "3rem" },
          color: "inherit", // Inherit the color from the parent Box
        }}
      >
        About DreamOn
      </Typography>

      {/* Content Grid */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
              animation: "slide-in 1s ease-in-out",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  color: "text.primary", // Dark text for better readability
                }}
              >
                Empowering Lifelong Learning
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  lineHeight: 1.6,
                  color: "text.secondary", // Dark text for better readability
                }}
              >
                DreamOn is a platform dedicated to providing flexible and accessible part-time lessons
                for learners. Our mission is to empower individuals to achieve their
                career goals by offering high-quality education tailored to their needs and at an affordable price.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
