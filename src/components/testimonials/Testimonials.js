import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent } from "@mui/material";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "DreamOn has completely transformed my learning experience. The part-time sessions are flexible and high quality.",
    },
    {
      name: "Jane Smith",
      feedback: "The courses are well-structured, and the instructors are very supportive. I highly recommend DreamOn!",
    },
    {
      name: "Samuel Green",
      feedback: "I was able to balance work and studies thanks to DreamOn. The platform is intuitive and easy to use.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    customPaging: (i) => (
      <Box
        sx={{
          width: "12px",
          height: "12px",
          backgroundColor: "#1976d2",
          borderRadius: "50%",
          margin: "0 5px",
          cursor: "pointer",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots",
    cssEase: "ease-in-out",
  };

  return (
    <Box
      sx={{
        padding: { xs: "40px 20px", md: "80px 40px" },
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      {/* Styled Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "3rem" },
          marginBottom: "20px",
          textTransform: "capitalize", // Capitalize the first letters
          background: "linear-gradient(to right, #1976d2, #1565c0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          position: "relative",
          padding: "0 20px",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: "-5px",
            width: "60px",
            height: "5px",
            backgroundColor: "#1976d2",
            borderRadius: "5px",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            right: 0,
            bottom: "-5px",
            width: "60px",
            height: "5px",
            backgroundColor: "#1976d2",
            borderRadius: "5px",
          },
        }}
      >
        students testimonials
      </Typography>

      {/* Testimonials Slider */}
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index}>
            <Card
              sx={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                background: "linear-gradient(to bottom, #ffffff, #f0f4f8)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.05)",
                  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent>
                <Typography variant="body1" sx={{ fontStyle: "italic", marginBottom: "20px" }}>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                  - {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Testimonials;
