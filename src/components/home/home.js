import React from "react";
import { Button, Typography, Box } from "@mui/material";
import Testimonials from "../testimonials/Testimonials"; // Ensure correct path

function Home() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: { xs: "40px 20px", md: "80px 40px" },
        paddingTop: { xs: "100px", md: "120px" }, // Added padding to account for nav height
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Welcome to DreamOn!
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "300",
          marginBottom: "30px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Your journey to knowledge starts here. Explore flexible part-time sessions and learn at your own pace!
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#1565c0" },
        }}
        href="/courses"
      >
        Explore Courses
      </Button>

      {/* Add Testimonials Section */}
      <Testimonials />
    </Box>
  );
}

export default Home;
