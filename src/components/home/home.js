import React from "react";
import { Button, Typography, Box } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: { xs: "40px 20px", md: "80px 40px" },
        background: "linear-gradient(to right, #1976d2, #42a5f5)",
        color: "#fff",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        animation: "fade-in 1s ease-in-out",
      }}
    >
      {/* Hero Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          fontSize: { xs: "2rem", md: "3rem" },
          animation: "slide-in 1s ease-in-out",
        }}
      >
        Welcome to DreamOn!
      </Typography>

      {/* Hero Subtitle */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "300",
          marginBottom: "30px",
          maxWidth: "600px",
          fontSize: { xs: "1rem", md: "1.5rem" },
        }}
      >
        Your journey to knowledge starts here. Explore flexible part-time sessions and learn at your own pace!
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#ffb300",
          color: "#000",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#ffa000" },
          animation: "bounce-in 1.2s ease",
        }}
        href="/courses"
      >
        Explore Courses
      </Button>
    </Box>
  );
}

export default Home;
