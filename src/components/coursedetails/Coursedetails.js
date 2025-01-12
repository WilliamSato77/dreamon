import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const coursesData = {
  1: {
    title: "Community Development",
    levels: [
      {
        level: 4,
        units: [
          "Introduction to community",
          "Understanding community Development",
          "Sociology and Social Work",
          "Working with the vulnerables",
          "Project Planning",
        ],
      },
      {
        level: 5,
        units: [
          "Leadership and Conflict",
          "Capacity Building and Sustainability in Communities",
          "Humanitarian Aid and Crisis Management",
          "Community Health and Disease Management",
          "Accessing and Managing Project Resources",
        ],
      },
      {
        level: 6,
        units: [
          "Community and Inter-Agency Working",
          "Critical Engagement with Social Policy",
          "Entrepreneurship in Communities",
          "Reflective Practice",
          "Project Management",
        ],
      },
    ],
  },
  4: {
    title: "Human Resource Management",
    levels: [
      {
        level: 4,
        units: [
          "Introduction to Human Resource Management",
          "Human Resource Planning",
          "Recruitment and Selection",
          "Releasing People from the Organisation",
          "Managing Reward and Remuneration",
        ],
      },
      {
        level: 5,
        units: [
          "Learning and Development",
          "Employee Engagement",
          "Organisation Design",
          "Performance Management",
          "Development of Human Resource Procedures and Plans",
        ],
      },
      {
        level: 6,
        units: [
          "Human Resource Strategy Development",
          "Organisational Resource Planning",
          "Organisational Performance and Reward",
          "Employee Engagement Strategy",
          "Employee Relations",
        ],
      },
    ],
  },
  3: {
    title: "Computing and Information Systems",
    levels: [
      {
        level: 4,
        units: [
          "Information Systems",
          "Computer Programming",
          "Information System Analysis and Design",
          "Information Presentation and Analysis",
          "Web Technologies",
        ],
      },
      {
        level: 5,
        units: [
          "Database Systems",
          "Software Development",
          "Information System Analysis and Design",
          "Web Application Development",
          "E-commerce Strategy",
        ],
      },
      {
        level: 6,
        units: [
          "Software Engineering Algorithm Design and Analysis",
          "Enterprise Architecture",
          "Organisational Security",
          "IT Project Management",
          "Scalable Web and E-commerce",
        ],
      },
    ],
  },
  5: {
    title: "Business Management",
    levels: [
      {
        level: 4,
        units: [
          "Leadership and Management",
          "Financial Analysis and Planning",
          "Operations Management",
          "Quality Management",
          "Organisational Behaviour, Culture, and Ethics",
        ],
      },
      {
        level: 5,
        units: [
          "Business Strategy and Planning",
          "Change Leadership",
          "Customer Relationship Management",
          "Strategic Decision Making",
          "International Business",
        ],
      },
      {
        level: 6,
        units: [
          "Strategic Business Management",
          "Managing Marketing Strategy",
          "Management of Human Resources",
          "Finance For Managers",
          "Information Technology and Business",
        ],
      },
    ],
  },
  2: {
    title: "Computer Engineering",
    levels: [
      {
        level: 4,
        units: [
          "Computer Systems",
          "Computer Security",
          "Management of Project",
          "Network Technology",
          "Personal Computer Software Support",
        ],
      },
      {
        level: 5,
        units: [
          "Human Computer Interaction",
          "Internet Server Management",
          "IT Security Management",
          "Advanced Networking Technology",
          "IT Virtualisation",
        ],
      },
      {
        level: 6,
        units: [
          "Data Centre Technology",
          "Distributed and Concurrent Systems",
          "VLSI Design and Signal Processing",
          "Embedded and Digital Systems Engineering",
          "Cloud Computing and Operating Systems",
        ],
      },
    ],
  },
};

function Coursedetails() {
  const { id } = useParams(); // Retrieve course ID from route parameters
  const [activeLevel, setActiveLevel] = useState(null);
  const [deliveryMode, setDeliveryMode] = useState("");

  const course = coursesData[id]; // Get course details based on ID

  const handleEnrollClick = (level) => {
    setActiveLevel((prev) => (prev === level ? null : level));
  };

  const handleDeliveryModeChange = (event) => {
    setDeliveryMode(event.target.value);
  };

  if (!course) {
    return (
      <Typography variant="h4" sx={{ textAlign: "center", marginTop: "50px" }}>
        Course not found.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        padding: "40px",
        paddingTop: "120px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        {course.title} - Course Details
      </Typography>

      <Grid container spacing={4}>
        {course.levels.map((level) => (
          <Grid item xs={12} sm={6} md={4} key={level.level}>
            <Card
              sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderLeft: "5px solid #1976d2",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    textAlign: "center",
                    color: "#1976d2",
                  }}
                >
                  Level {level.level}
                </Typography>

                {activeLevel === level.level ? (
                  <Box
                    component="form"
                    sx={{
                      padding: "15px",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "5px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                    }}
                  >
                    <IconButton
                      onClick={() => setActiveLevel(null)}
                      sx={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                      Enrollment Form
                    </Typography>
                    <TextField label="Full Name" variant="outlined" fullWidth margin="normal" required />
                    <TextField label="Email Address" variant="outlined" fullWidth margin="normal" type="email" required />
                    <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" required />

                    <FormControl fullWidth margin="normal">
                      <InputLabel>Mode of Delivery</InputLabel>
                      <Select
                        value={deliveryMode}
                        onChange={handleDeliveryModeChange}
                        label="Mode of Delivery"
                        required
                      >
                        <MenuItem value="weekdays_offline">Weekdays Offline</MenuItem>
                        <MenuItem value="weekdays_online">Weekdays Online</MenuItem>
                        <MenuItem value="weekend_online">Weekend Online</MenuItem>
                        <MenuItem value="weekend_offline">Weekend Offline</MenuItem>
                      </Select>
                    </FormControl>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        marginTop: "10px",
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#1565c0" },
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                ) : (
                  <List>
                    {level.units.map((unit, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemText primary={unit} />
                      </ListItem>
                    ))}
                  </List>
                )}

                {!activeLevel && (
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleEnrollClick(level.level)}
                    sx={{
                      marginTop: "15px",
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#1565c0" },
                    }}
                  >
                    Enroll
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Coursedetails;
