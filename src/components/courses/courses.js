import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Grid } from "@mui/material";
import communityImage from "../../assets/development.jpg";
import engineeringImage from "../../assets/engineering.jpg";
import computingImage from "../../assets/computer.jpg";
import humanImage from "../../assets/human.jpg";
import managerImage from "../../assets/manager.jpg";

function Courses() {
  const courseList = [
    {
      title: "Community Development",
      description: "Learn how to build stronger communities.",
      image: communityImage,
    },
    {
      title: "Computer Engineering",
      description: "Master hardware systems and digital electronics.",
      image: engineeringImage,
    },
    {
      title: "Computing and Information Systems",
      description: "Explore programming and database systems.",
      image: computingImage,
    },
    {
      title: "Human Resource Management",
      description: "Develop skills to manage and motivate teams effectively.",
      image: humanImage,
    },
    {
      title: "Business Management",
      description: "Learn how to plan, organize, and oversee business operations.",
      image: managerImage,
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        paddingTop: "120px", // Added padding to account for the AppBar height
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "40px",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Our Courses
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {courseList.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
                sx={{
                  borderBottom: "4px solid #1976d2",
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" href="#" sx={{ color: "#1976d2", borderColor: "#1976d2" }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Courses;
