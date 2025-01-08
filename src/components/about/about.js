import React from "react";
import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import aboutImage from "../../assets/about.jpg"; // Keep the image as it is

function About() {
  return (
    <Box
      sx={{
        position: "relative",
        padding: { xs: "40px 20px", md: "80px 40px" },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        paddingTop: { xs: "120px", md: "150px" }, // Add top padding to account for navbar height
      }}
    >
      {/* Background Image with Blur Effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px)",
          zIndex: -1,
        }}
      />

      {/* Section Title "About DreamOn" */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "700",
          marginBottom: "40px",
          fontSize: { xs: "2rem", md: "3rem" },
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "inherit",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        About DreamOn
      </Typography>

      {/* Content Grid */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Card Section */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "30px 40px",
              borderRadius: "0", // Remove rounded corners
              borderLeft: "5px solid #1976d2", // Left side border color
              margin: { xs: "20px", md: "40px" }, // Margin around the card
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-10px)", // Lift effect on hover
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  marginBottom: "20px",
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                  color: "text.primary",
                  letterSpacing: "1px",
                  textTransform: "capitalize",
                }}
              >
                Empowering Lifelong Learning
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  lineHeight: 1.7,
                  color: "text.secondary",
                  fontWeight: "400",
                  letterSpacing: "0.5px",
                }}
              >
                DreamOn is a platform dedicated to providing flexible and accessible part-time lessons
                for learners. Our mission is to empower individuals to achieve their career goals by offering
                high-quality education tailored to their needs and at an affordable price.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
