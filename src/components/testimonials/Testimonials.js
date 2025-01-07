import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "DreamOn has completely transformed my learning experience. The part-time sessions are flexible and high quality.",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      feedback: "The courses are well-structured, and the instructors are very supportive. I highly recommend DreamOn!",
      avatar: "https://via.placeholder.com/150",
    },
    {
      name: "Samuel Green",
      feedback: "I was able to balance work and studies thanks to DreamOn. The platform is intuitive and easy to use.",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: "40px 20px", md: "80px 40px" },
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "40px",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        What Our Students Say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                backgroundColor: "#ffffff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 20px",
                  }}
                />
                <Typography variant="body1" sx={{ fontStyle: "italic", marginBottom: "20px" }}>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  - {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonials;
