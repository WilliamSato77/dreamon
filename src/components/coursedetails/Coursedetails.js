import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

const coursesData = {
  1: {
    title: "Community Development",
    levels: [
      { level: 4, units: ["Introduction to community", "Understanding community Development", "Sociology and Social Work", "Working with the vulnerables", "Project Planning"] },
      { level: 5, units: ["Leadership and Conflict", "Capacity Building", "Humanitarian Aid and Crisis Management", "Community Health and Disease Management", "Accessing Project Resources"] },
      { level: 6, units: ["Community and Inter-Agency Working", "Critical Engagement with Social Policy", "Entrepreneurship in Communities", "Reflective Practice", "Project Management"] },
    ],
  },
  2: {
    title: "Computer Engineering",
    levels: [
      { level: 4, units: ["Computer Systems", "Computer Security", "Management of Project", "Network Technology", "Software Support"] },
      { level: 5, units: ["Human Computer Interaction", "Server Management", "IT Security Management", "Advanced Networking", "Virtualisation"] },
      { level: 6, units: ["Data Centre Technology", "Concurrent Systems", "Signal Processing", "Digital Systems Engineering", "Cloud Computing"] },
    ],
  },
  3: {
    title: "Computing and Information Systems",
    levels: [
      { level: 4, units: ["Information Systems", "Programming", "Analysis and Design", "Data Presentation", "Web Technologies"] },
      { level: 5, units: ["Database Systems", "Software Development", "Web Development", "E-commerce Strategy", "IT Strategy"] },
      { level: 6, units: ["Algorithm Design", "Enterprise Architecture", "Security", "IT Project Management", "Scalable Systems"] },
    ],
  },
  4: {
    title: "Human Resource Management",
    levels: [
      { level: 4, units: ["Introduction to HRM", "HR Planning", "Recruitment and Selection", "Exiting Employees", "Reward Management"] },
      { level: 5, units: ["Learning and Development", "Employee Engagement", "Org Design", "Performance Management", "HR Procedures"] },
      { level: 6, units: ["HR Strategy", "Resource Planning", "Performance Reward", "Engagement Strategy", "Employee Relations"] },
    ],
  },
  5: {
    title: "Business Management",
    levels: [
      { level: 4, units: ["Leadership", "Financial Planning", "Operations Management", "Quality Management", "Organisational Ethics"] },
      { level: 5, units: ["Business Strategy", "Change Leadership", "CRM", "Strategic Decision Making", "International Business"] },
      { level: 6, units: ["Strategic Management", "Marketing Strategy", "HR Management", "Finance for Managers", "IT and Business"] },
    ],
  },
};

function Coursedetails() {
  const { id } = useParams();
  const [activeLevel, setActiveLevel] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const course = coursesData[Number(id)];

  const handleEnrollClick = (level) => {
    setActiveLevel((prev) => (prev === level ? null : level));
  };

  const onSubmit = (data) => {
    alert(`Enrollment successful for Level ${activeLevel}:\n${JSON.stringify(data, null, 2)}`);
    reset();
    setActiveLevel(null);
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
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: "2.5rem",
          background: "linear-gradient(90deg, #1976d2, #42a5f5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          padding: "10px",
        }}
      >
        {course.title} - Levels and Units
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
                    fontSize: "1.4rem",
                    textTransform: "uppercase",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Level {level.level}
                </Typography>
                {activeLevel === level.level ? (
                  <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
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
                    <TextField
                      {...register("fullName", { required: "Full Name is required" })}
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />
                    <TextField
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email",
                        },
                      })}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                    <TextField
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone",
                        },
                      })}
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Mode of Delivery</InputLabel>
                      <Select
                        {...register("mode", { required: "Mode of delivery is required" })}
                        label="Mode of Delivery"
                        defaultValue=""
                      >
                        <MenuItem value="weekdays_offline">Weekdays Offline</MenuItem>
                        <MenuItem value="weekdays_online">Weekdays Online</MenuItem>
                        <MenuItem value="weekend_online">Weekend Online</MenuItem>
                        <MenuItem value="weekend_offline">Weekend Offline</MenuItem>
                      </Select>
                    </FormControl>
                    {errors.mode && (
                      <Typography
                        variant="body2"
                        color="error"
                        sx={{ marginBottom: "10px" }}
                      >
                        {errors.mode.message}
                      </Typography>
                    )}
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        marginTop: "10px",
                        backgroundColor: "#1976d2",
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
                        <ListItemText primary={`Unit ${index + 1}: ${unit}`} />
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
