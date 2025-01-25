import React from "react";
import { Box, Grid, TextField, Button, Typography, Card, CardContent } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Clear the form after submission
  };

  return (
    <Box
      sx={{
        padding: { xs: "40px 20px", md: "80px 40px" },
        paddingTop: { xs: "100px", md: "120px" }, // Added padding to account for nav height
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "40px",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
              borderLeft: "5px solid #1976d2", // Left side border color
              animation: "fade-in 1s ease-in-out",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                Get in Touch
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  margin="normal"
                  {...register("name", { required: "Name is required" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  margin="normal"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    fontWeight: "bold",
                    marginTop: "20px",
                    "&:hover": { backgroundColor: "#1565c0" },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Details and Map */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              animation: "slide-in 1s ease-in-out",
            }}
          >
            {/* Contact Details */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <LocationOn sx={{ color: "#1976d2" }} />
              <Typography variant="body1">Zomba, Malawi</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Phone sx={{ color: "#1976d2" }} />
              <Typography variant="body1">+265 884 584 274 | +265 997 267 718</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Email sx={{ color: "#1976d2" }} />
              <Typography variant="body1">info@dreamon.com</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
